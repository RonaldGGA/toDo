// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/toDo";
let isConnected;
const connectDb = async () => {
  try {
    // if (isConnected) {
    //   console.log("Using existion connection");
    //   return;
    // }
    const db = await mongoose.connect(MONGODB_URI);
    // console.log(db);
    isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
