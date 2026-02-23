import mongoose from "mongoose";

const connectDB = async () => {
  try {

  
       await mongoose.connect("mongodb://127.0.0.1:27017/hospital");
  

    console.log("MongoDB Connected Successfully");

  } catch (error) {

    console.error("MongoDB connection error:", error);

  }
};

export default connectDB;
