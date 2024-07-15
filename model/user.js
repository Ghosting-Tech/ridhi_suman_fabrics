import mongoose, { Schema } from "mongoose";

import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      lowercase: true,
    },

    image: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    wishlist: [
      {
        type: Schema.Types.ObjectId,
        default: [],
        ref: "Product",
      },
    ],

    cart: [
      {
        type: Schema.Types.ObjectId,
        default: [],
        ref: "Product",
      },
    ],

    createdBy: {
      type: String,
      default: "user",
    },

    shippingInfo: {
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

    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
      required: true,
    },

    otp: {
      type: Number,
      minlength: 6,
      maxlength: 6,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    otpExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(12, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

export default mongoose.models.User || mongoose.model("User", userSchema);
