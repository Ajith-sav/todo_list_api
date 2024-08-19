const mongooes = require("mongoose")

const connectDB = async ()=>{
    try {
        await mongooes.connect(process.env.MONGO_URI);
        console.log("MongoDB connected...")
        
    } catch (error) {
        console.log("MongoDB connection failed:",error);
        process.exit(1);
    }
}

module.exports = connectDB