import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Sale = mongoose.model("Sale", saleSchema);

export default Sale;
