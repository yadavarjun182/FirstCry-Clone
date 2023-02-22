const express = require("express")
const { UserModel } = require("../model/user.model")
const userRouter = express.Router()
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt')

userRouter.get("/", (req, res) => {
    res.send("all users")
})



userRouter.post("/register",async(req,res) =>  {
          console.log(req.body)
    try{
        const {name,contact,email,password} = req.body;

         let userCheck = await UserModel.find({email})

         if(userCheck.length > 0){
            res.send('User is already exist, go for Login')
         }else{
            bcrypt.hash(password, 3, async(err, hash) => {
                if(err){
                 res.send({'unable to register, err':err})
                }
                else if(name && contact && email && password ){
                 let User = new UserModel({name,contact,email,password:hash})
                 await User.save()
                 res.send('User Register Sucess')
                }else{
                 res.send('User need all information')
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
       //console.log(user)
        if(user.length > 0 ){
              bcrypt.compare(password, user[0].password, (err, result)=> {
              if(result){
              let token = jwt.sign({ uderId:user[0]._id }, 'masai');
              res.send({'msg':'user login !',"token":token})
              }
              else{
                res.send({'msg':'wrong password','err':err})
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

 userRouter.patch('/profile',async(req,res) => {
     try{
        let payload = req.body;
        console.log(payload)
        let userMail = req.headers.email;
        let User = await UserModel.findOneAndUpdate({email:userMail},payload)
        console.log('user:',User)
        res.send('user update sucess')
     }catch(err){
        res.send({'msg':'something went wrong','err':err})
     }
 })


module.exports = {
    userRouter
}
