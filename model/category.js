import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    subCategories: {
      type: Array,
      default: [],

      items: {
        type: Object,

        properties: {
          name: {
            type: String,
            lowercase: true,
          },

          colour: {
            type: String,
          },
        },
      },
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);

export default Category;
