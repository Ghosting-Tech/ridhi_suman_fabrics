import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      required: true,
    },

    subCategories: [
      {
        type: String,
        unique: true,
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);

export default Category;
