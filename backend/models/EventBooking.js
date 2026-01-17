const mongoose = require("mongoose");

const eventBookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    numberOfPeople: {
      type: Number,
      required: [true, "Number of people is required"],
      min: 1,
    },
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "refunded"],
      default: "pending",
    },
    contactEmail: {
      type: String,
      required: true,
    },
    contactPhone: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("EventBooking", eventBookingSchema);
