import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    category_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: [String],
    sub_categories: [String],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
