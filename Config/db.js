const mongoose = require("mongoose");
const connectDB = async () => {
    mongoose.set('strictQuery', false);
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,