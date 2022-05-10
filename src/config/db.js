//Import the mongoose module
import mongoose from "mongoose";
import { Sale } from "../models/index.js";

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Sale };

export { connectDb };
export default models;
