import mongoose, { Schema } from "mongoose";

const SetOfProductSchema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
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

    brand: [
      {
        type: Schema.Types.ObjectId,
        ref: "Brand",
      },
    ],

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
