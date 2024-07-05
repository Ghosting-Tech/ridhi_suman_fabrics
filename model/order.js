import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    cart_items: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    user: { type: Schema.Types.ObjectId, ref: "User" },
    delivery_date: { type: Date, required: true },
    payment_method: { type: String, required: true },
    canceled_by: { type: String },
    cancellation_reason: { type: String },
    status: {
      type: String,
      enum: ["Confirmed", "Packed", "Shipped", "Received", "Canceled"],
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
