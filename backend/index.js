const express = require("express")
const {userRouter}= require("./routes/user.route")
const app = express();
const connection = require("./config/db");
const { adminRouter } = require("./routes/admin.register.route");

app.use(express.json())
app.use("/users", userRouter)
app.use("/admin", adminRouter)


app.listen(7300, async () => {
    try {
        await connection
    } catch (err) {
        console.log("error something")
    }
    console.log("server running at 7300")
})