const GalleryImage = require("../models/GalleryImage");

// @desc    Get all gallery images
// @route   GET /api/gallery
// @access  Public
exports.getAllImages = async (req, res, next) => {
  try {
    const { category, page = 1, limit = 12 } = req.query;

    const query = { isActive: true };

    if (category && category !== "All") {
      query.category = category;
    }

    const images = await GalleryImage.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await GalleryImage.countDocuments(query);

    res.status(200).json({
      success: true,
      count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      data: images,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single image
// @route   GET /api/gallery/:id
// @access  Public
exports.getImage = async (req, res, next) => {
  try {
    const image = await GalleryImage.findById(req.params.id);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    res.status(200).json({
      success: true,
      data: image,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Upload image (Admin only)
// @route   POST /api/gallery
// @access  Private/Admin
exports.uploadImage = async (req, res, next) => {
  try {
    const { src, title, category, photographer } = req.body;

    const image = await GalleryImage.create({
      src,
      title,
      category,
      photographer,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: image,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update image (Admin only)
// @route   PUT /api/gallery/:id
// @access  Private/Admin
exports.updateImage = async (req, res, next) => {
  try {
    const image = await GalleryImage.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    res.status(200).json({
      success: true,
      data: image,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete image (Admin only)
// @route   DELETE /api/gallery/:id
// @access  Private/Admin
exports.deleteImage = async (req, res, next) => {
  try {
    const image = await GalleryImage.findByIdAndDelete(req.params.id);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Like image
// @route   PUT /api/gallery/:id/like
// @access  Public
exports.likeImage = async (req, res, next) => {
  try {
    const image = await GalleryImage.findById(req.params.id);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found",
      });
    }

    image.likes += 1;
    await image.save();

    res.status(200).json({
      success: true,
      data: image,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get gallery statistics (Admin only)
// @route   GET /api/gallery/stats
// @access  Private/Admin
exports.getGalleryStats = async (req, res, next) => {
  try {
    const total = await GalleryImage.countDocuments({ isActive: true });
    const totalLikes = await GalleryImage.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: null, totalLikes: { $sum: "$likes" } } },
    ]);

    const byCategory = await GalleryImage.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);

    res.status(200).json({
      success: true,
      stats: {
        total,
        totalLikes: totalLikes[0]?.totalLikes || 0,
        byCategory,
      },
    });
  } catch (error) {
    next(error);
  }
};
