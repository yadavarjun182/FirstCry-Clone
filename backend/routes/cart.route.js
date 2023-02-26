const express = require ('express')
const cartRouter = express.Router()
const {CartModel} = require('../model/cart.model.js')


cartRouter.get('/',async(req,res)=>{
    try{
        let quary = req.body.user
        const data = await CartModel.find({user:quary})
        if(data.length <= 0){
            res.send('cart is empty !!!')
        }else{
            res.send(data)
        }
      
    }catch(err){
        res.send({'msg':err})
    }
})


cartRouter.post('/addtocart',async(req,res)=>{
  
    try{
        const product = req.body
        console.log('product',product.title)
        let data = await CartModel.find({title:product.title})
        console.log('data',data)
        if(data.length > 0){
            res.send({"msg":'Product present in Cart !'})
        }
        else{
            const Cart_product = new CartModel(product)
        await Cart_product.save()
        res.send("Product is added to Cart")
        }
    }catch(err){
        res.send({"err":err})
    }
})



cartRouter.patch('/cartupdate/:id',async(req,res)=>{
    try{
        let id = req.params.id
        let product = await CartModel.find({_id:req.params.id})
        let quantity = product[0].quantity + 1;
        if(product.length > 0){
            await CartModel.findByIdAndUpdate({_id:req.params.id},{quantity})
        }
        res.send(`product with id ${id} is updated`)
    }catch(err){
        res.send({'err':err.message})
    }
}) 



cartRouter.delete('/cartdelete/:id',async(req,res)=>{
   
    try{
        let id = req.params.id
        await CartModel.findByIdAndDelete({_id:id})
        let quary = req.body.user
        console.log(quary)
        const data = await CartModel.find({user:quary})
        res.send(data)
    }
    catch(err){
        console.log(err.message)
        res.send({'err':err.message})
    }
})

module.exports = {cartRouter}
