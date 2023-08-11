const mongoose = require('mongoose') 
const {Schema } = require('mongoose')

const appModel = new Schema({
    email: {
        type: String, 
        required: false
    }, 
    password: {
        type: String, 
        required: false
    }
})

module.exports = mongoose.model('applicants', appModel)