const mongoose = require("mongoose")

//mongodb+srv://arjun:arjun@cluster0.3wtn3cm.mongodb.net/firstcry?retryWrites=true&w=majority

const connection = mongoose.connect("mongodb+srv://vikesh:sector4e90@cluster0.tiwvvgy.mongodb.net/Firstcry?retryWrites=true&w=majority")

// const connection = mongoose.connect("mongodb+srv://vikesh:sector4e90@cluster0.tiwvvgy.mongodb.net/Firstcry?retryWrites=true&w=majority")
//const connection = mongoose.connect("mongodb+srv://arjun:arjun@cluster0.3wtn3cm.mongodb.net/firstcry?retryWrites=true&w=majority");
// const connection = mongoose.connect("mongodb+srv://manish-nishad:manish-nishad@cluster0.4yljajf.mongodb.net/firstcry?retryWrites=true&w=majority")



//const connection = mongoose.connect("mongodb+srv://arjun:arjun@cluster0.3wtn3cm.mongodb.net/firstcry?retryWrites=true&w=majority");
// const connection = mongoose.connect("mongodb+srv://manish-nishad:manish-nishad@cluster0.4yljajf.mongodb.net/firstcry?retryWrites=true&w=majority")



module.exports = { connection }


