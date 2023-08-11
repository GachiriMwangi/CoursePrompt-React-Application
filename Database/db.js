const mongoose = require('mongoose') 

const connectToDb = async() => {
   await  mongoose.connect('mongodb://localhost:27017/Applicants')
.catch((error) => console.log(error))
}

module.exports = connectToDb