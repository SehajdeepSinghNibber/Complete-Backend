import mongoose from 'mongoose'
import config from './config.js';

const connectDb= async ()=>{
    try {
        await mongoose.connect(`${config.MONGO_URI}/auth_practice`);
        console.log('DB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDb;