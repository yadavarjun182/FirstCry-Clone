const mongoose = require("mongoose")

//mongodb+srv://arjun:arjun@cluster0.3wtn3cm.mongodb.net/firstcry?retryWrites=true&w=majority
<<<<<<< HEAD
const connection = mongoose.connect("mongodb+srv://vikesh:sector4e90@cluster0.tiwvvgy.mongodb.net/Firstcry?retryWrites=true&w=majority")
=======
// const connection = mongoose.connect("mongodb+srv://vikesh:sector4e90@cluster0.tiwvvgy.mongodb.net/Firstcry?retryWrites=true&w=majority")
//const connection = mongoose.connect("mongodb+srv://arjun:arjun@cluster0.3wtn3cm.mongodb.net/firstcry?retryWrites=true&w=majority");
const connection = mongoose.connect("mongodb+srv://manish-nishad:manish-nishad@cluster0.4yljajf.mongodb.net/firstcry?retryWrites=true&w=majority")
>>>>>>> fc2843de450045c2989728db0cad7c72784c9474


//const connection = mongoose.connect("mongodb+srv://arjun:arjun@cluster0.3wtn3cm.mongodb.net/firstcry?retryWrites=true&w=majority");
// const connection = mongoose.connect("mongodb+srv://manish-nishad:manish-nishad@cluster0.4yljajf.mongodb.net/firstcry?retryWrites=true&w=majority")



module.exports = { connection }


