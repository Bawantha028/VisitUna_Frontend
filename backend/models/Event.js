const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Event description is required"],
      trim: true,
    },
    date: {
      type: String,
      required: [true, "Event date is required"],
    },
    time: {
      type: String,
      required: [true, "Event time is required"],
    },
    location: {
      type: String,
      required: [true, "Event location is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Event price is required"],
      min: 0,
    },
    category: {
      type: String,
      required: [true, "Event category is required"],
      enum: ["Festival", "Wellness", "Wildlife", "Workshop"],
    },
    image: {
      type: String,
      required: [true, "Event image is required"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    availableSlots: {
      type: Number,
      default: 100,
      min: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Event", eventSchema);
