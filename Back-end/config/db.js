const mongoose = require("mongoose");
const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewURLParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.Connection.host}`.cyan.underline);
    }
    catch (error){
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
}

module.exports = connectDB;