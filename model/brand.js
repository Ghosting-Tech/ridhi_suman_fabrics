import mongoose, { Schema } from "mongoose";

const BrandSchema = new Schema({
  name: {
    type: String,
    ref: "Product",
  },
});

export default mongoose.models.Brand || mongoose.model("Brand", BrandSchema);
