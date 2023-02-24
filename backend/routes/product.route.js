// const express = require('express')
// const ProductRouter = express.Router()
// const { ProductModel } = require("../model/product.model");


// ProductRouter.get('/',async(req, res)=>{
//    try{
//      let data = await ProductModel.find()
//      res.send( data)
//    }catch(err){
//      res.send({'err':err})
//    }
// })


// ProductRouter.post('/addproduct',async(req, res)=>{
//   console.log(req.body)
//     try{
//       let product = req.body
//       let newproduct = new ProductModel(product)
//       await newproduct.save()
//       console.log(newproduct)
//       res.send('products added ')
//     }catch(err){
//         console.log({"error":err.message})
//       res.send({'err':err.message}) 
//     }
// })

// ProductRouter.patch('/updateproducts',async(req,res)=>{
//   try{
//     let id = req.params.id;
//     let payload = req.body;
//     const product = await ProductModel.findOne({"_id":id})
//     const User_id_in_products = product.user;
//     const User_makingReq = req.body.user;
//       if(User_id_in_products === User_makingReq){
//       await ProductModel.findByIdAndUpdate({_id:id},payload)
//       res.send('updated sucess !!!')
//       }
//       else{
//       res.send('You are not Authorised for updating others Data!')
//       }
//   }
//   catch(err){
//     res.send({'err':err.message}) 
//   }
// })
// //
// ProductRouter.delete('/deleteproducts/:id',async(req,res)=>{
//   try{
//     let id = req.params.id
//     const product = await ProductModel.findOne({"_id":id})
//     const User_id_in_products = product.user;
//     const User_makingReq = req.body.user;
//     //console.log(User_id_in_products,User_makingReq)
//       if(User_id_in_products === User_makingReq){
//         await ProductModel.findByIdAndDelete({_id:id})
//         res.send('delete sucess !!!')
//       }else{
//         res.send('You are not Authorised for updating others Data!')
//       }
//   }
//   catch(err){
//     res.send({'err':err.message}) 
//   }
// })

// module.exports={ProductRouter}