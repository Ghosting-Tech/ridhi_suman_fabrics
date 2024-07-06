import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },

    image: {
      type: String,
      required: true,
    },

    phone_number: {
      type: Number,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    wishlist: {
      type: [String],
      default: [],
    },

    cart: {
      type: [],
      default: [],
    },

    shipping_info: {
      type: [
        {
          flat: {
            type: String,
            required: true,
          },

          street: {
            type: String,
            required: true,
          },

          landmark: {
            type: String,
          },

          city: {
            type: String,
            required: true,
          },

          state: {
            type: String,
            required: true,
          },

          pincode: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 6,
          },
        },
      ],
      default: [],
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

export default mongoose.models.User || mongoose.model("User", userSchema);
