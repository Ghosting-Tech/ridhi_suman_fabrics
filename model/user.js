import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
    },

    image: {
      type: String,
      required: true,
    },

    phone_number: {
      type: Number,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
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
          },
        },
      ],
      default: [],
    },
    orders: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
