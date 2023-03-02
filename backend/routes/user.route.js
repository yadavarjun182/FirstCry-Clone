const express = require("express")
var cors = require('cors')
const { UserModel } = require("../model/user.model")
const {cartAuthanticate} = require ('../vmiddleware/cart.middleware.js')
const userRouter = express.Router()
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt')





userRouter.get("/get",cartAuthanticate,async(req,res) => {
   // console.log('user++++',req.body)
    try{
        let user_id = req.body.user
        const allusersdata = await UserModel.find({_id:user_id})
        res.send(allusersdata)
    }catch(err){
        res.send({"err":err.message})
    }
})



userRouter.post("/register",async(req,res) =>  {
         // console.log(req.body)
    try{
        const {name,contact,email,password} = req.body;

         let userCheck = await UserModel.find({email})

         if(userCheck.length > 0){
            res.send({'msg':'user allready exist !'})
         }else{
            bcrypt.hash(password, 3, async(err, hash) => {
                if(err){
                 res.send({'err':'Unable to register !'})
                }
                else if(name && contact && email && password ){
                 let User = new UserModel({name,contact,email,password:hash})
                 await User.save()
                 res.send({'msg':'user register sucess !!!'})
                }else{
                 res.send({'err':'Fill all information in correct way !'})
                }
             });
         }
    }
    catch(err){
        console.log(err)
     res.send({'err':err})
    }
})


userRouter.post('/login',async(req,res)=>{
     try{
        let {email,password} = req.body

       let user = await UserModel.find({email})
       if(email ==='' || password === ''){
        res.send({'err':'Fill Correct Information !'})
       }
       else if(user.length > 0 ){
              bcrypt.compare(password, user[0].password, (err, result)=> {
              if(result){
              let token = jwt.sign({ userId:user[0]._id }, 'firstcry');
              res.send({'msg':'User Login Sucess!',"token":token})
              }
              else{
                console.log('wrong pw')
                res.send({'err':'wrong password'})
              }
         })
        }else{
          res.send({'err':'user not found !'})
           }  
     }
     catch(err){
        res.send({'err':err.message})
     }
 })
    
//User info-------

 userRouter.post('/profileupdate',cartAuthanticate,async(req,res) => {
    console.log({'BODY':req.body})
     try{
        let payload = req.body;
       // console.log('req===>',payload)
         let user_id = req.body.user;
          
         let update = {
        "Address":[{
                     "city":req.body.city || '',
                     "pin":req.body.pin || '',
                     "add1":req.body.add1 || '',
                     "add2":req.body.add2 || ''
                   }]
         }
        //console.log({'id':user_id,"update":update})
        let User = await UserModel.findOneAndUpdate({_id:user_id},update)
         console.log('user:',User)
        res.send('user update sucess')
     }catch(err){
        res.send({'msg':'something went wrong','err':err})
     }
 })


module.exports = {
    userRouter
}
