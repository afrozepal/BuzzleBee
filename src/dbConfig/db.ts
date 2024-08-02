import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    throw new Error("Please define the MONGO_URL environment variable");
  }

  try {
    await mongoose.connect(MONGO_URL); // Options are not required as defaults are already set
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Error connecting to MongoDB");
  }
};

export default connect;
