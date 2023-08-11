const mongoose = require('mongoose') 
require('dotenv').config()
const uri = process.env.URI
const connectToDb = async() => {
   await  mongoose.connect(uri)
.catch((error) => console.log(error))
}

module.exports = connectToDb