import mongoose from "mongoose";

const connectDB = (url) => {
    return mongoose.connect(url).then( () => {
        console.log(`Connected to MongoDB: ${url}`);
    });
};

export default connectDB;