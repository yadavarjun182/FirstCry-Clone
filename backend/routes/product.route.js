const express = require('express')
const productRouter = express.Router()
const { ProductModel } = require("../model/product.model");


productRouter.get('/get', async (req, res) => {
    // let { rating } = req.query

    const query = req.query
    try {
        let data = await ProductModel.find(query)
        console.log('Data count:', data.length)
        res.status(200).send(data)
    } catch (err) {
        console.log("arjun")
        console.log({ "err": err.message })
        res.status(404).send({ 'err': err.message })
    }
})


productRouter.post('/add', async (req, res) => {
    try {
         const payload = req.body
        // const prodArr= ProductModel.insertMany()
        console.log(payload)
        const newproduct = new ProductModel(payload)
        await newproduct.save()
        console.log(newproduct)
        res.status(200).send('products added ')
    } catch (err) {
        res.status(404).send({ 'err': err.message })
    }
})

productRouter.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const payload = req.body;
        const product = await ProductModel.findOne({ "_id": id })

        await ProductModel.findByIdAndUpdate({ _id: id }, payload)
        res.status(200).send('updated success !!!')

        //     const User_id_in_products = product.user;
        //     const User_makingReq = req.body.user;
        //     if (User_id_in_products === User_makingReq) {
        //         await ProductModel.findByIdAndUpdate({ _id: id }, payload)
        //         res.status(200).send('updated success !!!')
        //     }
        //     else {
        //         res.send('You are not Authorised for updating others Data!')
        //     }


    }
    catch (err) {
        res.status(404).send({ 'err': err.message })
    }
})

productRouter.delete('/delete/:id', async (req, res) => {
    try {
        let id = req.params.id
        const product = await ProductModel.findOne({ "_id": id })

        await ProductModel.findByIdAndDelete({ _id: id })
        res.status(200).send('delete sucess !!!')

        // const User_id_in_products = product.user;
        // const User_makingReq = req.body.user;
        // //console.log(User_id_in_products,User_makingReq)
        // if (User_id_in_products === User_makingReq) {
        //     await ProductModel.findByIdAndDelete({ _id: id })
        //     res.status(200).send('delete sucess !!!')
        // } else {
        //     res.status(400).send('You are not Authorised for updating others Data!')
        // }
    }
    catch (err) {
        res.status(400).send({ 'err': err.message })
    }
})

module.exports = { productRouter }