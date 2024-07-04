import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    category: { type: String, required: true },
    sub_category: { type: String, required: true },
    title: { type: String, required: true },
    images: [String],
    discount: { type: Number, required: true },
    description: { type: String, required: true },
    visibility: { type: Boolean, required: true },
    price: { type: Number, required: true },
    sizes: [
      {
        size: { type: String, required: true },
        colours: [
          {
            type: {
              colour: {
                type: {
                  name: { type: String, required: true },
                  hexCode: { type: String, required: true },
                },
                required: true,
              },
              quantity: { type: String, required: true },
            },
          },
        ],
      },
    ],
    fabric: { type: String, required: true },
    brand: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
