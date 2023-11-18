const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'name not provided']
    },
    email : {
        type:String,
        required:[true, 'email not provided'],
        unique:true
    },
    gender:String,
    status:String

})

module.exports = mongoose.model('Userdb', userSchema)