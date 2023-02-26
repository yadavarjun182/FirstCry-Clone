const express = require("express")
const cors = require('cors')
const { connection } = require('./config/db.js')
const { cartAuthanticate } = require('./vmiddleware/cart.middleware.js')
const { userRouter } = require("./routes/user.route.js")
const { adminRouter } = require("./routes/admin.register.route");
const { cartRouter } = require("./routes/cart.route.js")
const { productRouter } = require("./routes/product.route.js")

const app = express()
app.use(cors({ origin: "*" }))
app.use(express.json())


app.use("/users", userRouter)
app.use("/admin", adminRouter)

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    next()
});

app.use("/products", productRouter)


//************* */ cart****************//
app.use(cartAuthanticate)
app.use("/cart", cartRouter)


app.listen(7300, async () => {
    try {
        await connection
        console.log('connected to dbs')
    } catch (err) {
        console.log({ 'err': err })
    }
    console.log("server running at 7300")
})