import mongoose, { Schema } from "mongoose";

const SetOfProductSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },

    sub_category: {
      type: Array,
      required: true,
      default: [],
    },

    title: {
      type: String,
      required: true,
    },

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

    fabric: [String],

    brand: [String],

    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.SetOfProduct ||
  mongoose.model("SetOfProduct", SetOfProductSchema);
