import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    image: [String],

    sub_categories: [String],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);

export default Category;
