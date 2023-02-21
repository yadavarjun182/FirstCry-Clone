const express = require("express")
const {userRouter}= require("./routes/user.route")
const app = express()

app.use(express.json())
app.use("/users",userRouter)


app.listen(7300, async () => {
    try {
        await connection
    } catch (err) {
        console.log("error something")
    }
    console.log("server running at 7300")
})