const express = require("express")
const {userRouter}= require("./routes/user.route.js")
const {connection} = require('./config/db.js')
const app = express()

app.use(express.json())
app.use("/users",userRouter)


app.listen(7300, async () => {
    try {
        await connection
        console.log('connected to dbs')
    } catch (err) {
        console.log({'err':err})
    }
    console.log("server running at 7300")
})