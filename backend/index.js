const express = require("express")
const cors = require('cors')
const {connection} = require('./config/db.js')
const {cartAuthanticate} = require('./vmiddleware/cart.middleware.js')
const {userRouter}= require("./routes/user.route.js")
const { adminRouter } = require("./routes/admin.register.route");
const {cartRouter} = require("./routes/cart.route.js")
const { ProductRouter } = require("./routes/product.route.js")


const app = express()
app.use(cors({origin:"*"}))
app.use(express.json())

// app.use("/users", userRouter)
// app.use("/admin", adminRouter)
app.use("./adminhandle", ProductRouter)

//************* */ cart****************//
// app.use(cartAuthanticate)
// app.use("/cart", cartRouter)


app.listen(7300, async () => {
    try {
        await connection
        console.log('connected to dbs')
    } catch (err) {
        console.log({'err':err})
    }
    console.log("server running at 7300")
})