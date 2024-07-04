import mongoose  from "mongoose";
import dotenv from "dotenv";
dotenv.config();


async function  connectDB() {
   await mongoose.connect(process.env.MONGODB_URI)
     .then(()=> console.log('Database connected successfully'))
     .catch((error)=> console.log('Hey there is some error', error))
   }
   
   export default connectDB