const mongoose = require("mongoose");

const galleryImageSchema = new mongoose.Schema(
  {
    src: {
      type: String,
      required: [true, "Image URL is required"],
    },
    title: {
      type: String,
      required: [true, "Image title is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Image category is required"],
      enum: [
        "Beach",
        "Sunset",
        "Landscape",
        "Culture",
        "Diving",
        "Nature",
        "Heritage",
        "Wildlife",
      ],
    },
    photographer: {
      type: String,
      default: "VisitUNA Team",
      trim: true,
    },
    likes: {
      type: Number,
      default: 0,
      min: 0,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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

module.exports = mongoose.model("GalleryImage", galleryImageSchema);
