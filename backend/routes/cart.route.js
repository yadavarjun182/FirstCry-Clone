const express = require('express')
const cartRouter = express.Router()
const { CartModel } = require('../model/cart.model.js')


cartRouter.get('/', async (req, res) => {
    try {
        let quary = req.body.user
        const data = await CartModel.find({ user: quary })
        if (data.length <= 0) {
            res.send('cart is empty !!!')
        } else {
            let total = 0
            let price = 0
            let discount = 0
            for (let i = 0; i < data.length; i++) {
                total = total + (data[i].mrp*data[i].Cart_quantity);
                price = price + (((data[i].mrp*data[i].Cart_quantity) + ((data[i].mrp * data[i].discount) / 100)))
                discount = discount + (((data[i].mrp*data[i].Cart_quantity) * data[i].discount) / 100)
            }
            res.send({ 'data': data, 'total': total, "price": price, "discount": discount })
        }

    } catch (err) {
        res.send({ 'msg': err })
    }
})


cartRouter.post('/addtocart',async(req,res)=>{

    try{
        const product = req.body;
        let data = await CartModel.find({title:product.title,user:product.user})
        console.log('data===',data)
        console.log(data.user,'===',product.user)
        if( data.length > 0){
            res.send({"msg":'Product present in Cart !'})
        }
        else{
            const Cart_product = new CartModel(product)
        await Cart_product.save()
        res.send({"msg":'Product Added in Cart !'})
        }
    }catch(err){
        console.log({'err':err})
        res.send({"err":err})
    }
})



cartRouter.patch('/cartupdate/:id', async (req, res) => {
    try {
        let id = req.params.id
        let product = await CartModel.find({ _id: req.params.id })
        let quantity = product[0].quantity + 1;
        if (product.length > 0) {
            await CartModel.findByIdAndUpdate({ _id: req.params.id }, { quantity })
        }
        res.send(`product with id ${id} is updated`)
    } catch (err) {
        res.send({ 'err': err.message })
    }
})



cartRouter.delete('/cartdelete/:id', async (req, res) => {

    try {
        let id = req.params.id
        await CartModel.findByIdAndDelete({ _id: id })
        let quary = req.body.user
        console.log(quary)
        const data = await CartModel.find({ user: quary })
        res.send(data)
    }
    catch (err) {
        console.log(err.message)
        res.send({ 'err': err.message })
    }
})


cartRouter.delete('/payment/:id', async (req, res) => {
  console.log(req.params.id,req.body)
    try {
        let id = req.params.id
        console.log(id)
        await CartModel.deleteMany({ user: req.body.user })
        res.send('Product added in Order List !')
    }
    catch (err) {
        console.log(err.message)
        res.send({ 'err': err.message })
    }
})

module.exports = { cartRouter }
