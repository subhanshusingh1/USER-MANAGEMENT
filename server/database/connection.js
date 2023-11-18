const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MONGODB CONNECTED ${con.connection.host}`)
    } catch(error) {
        console.log({msg:error})
    }
}

module.exports = connectDB