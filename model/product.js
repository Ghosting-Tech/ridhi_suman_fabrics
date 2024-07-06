import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },

    subCategory: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    images: [String],

    discount: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    visibility: {
      type: Boolean,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    sizes: [
      {
        size: {
          type: String,
          required: true,
        },

        colours: [
          {
            colour: {
              name: {
                type: String,
                required: true,
              },

              hexCode: {
                type: String,
                required: true,
              },
            },

            quantity: {
              type: String,
              required: true,
            },

            _id: false,
          },
        ],
        _id: false,
      },
    ],

    fabric: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
