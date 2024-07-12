import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    cartItems: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },

        quantity: {
          type: Number,
          required: true,
        },
      },
    ],

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    deliveryDate: {
      type: Date,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    canceledBy: {
      type: String,
    },

    cancellationReason: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Confirmed", "Packed", "Shipped", "Delivered", "Canceled"],
      required: true,
      default: "Confirmed",
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
