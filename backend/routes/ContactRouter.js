// import express from "express";
// import Contact from "../models/Contact.js";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const newContact = new Contact(req.body);
//     await newContact.save();
//     res.status(201).json({ message: "Message Sent Successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to Send Message." });
//   }
// });

// export default router;
import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All required fields must be filled" });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send proper success response
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({
      success: false,
      message: "Server error while saving contact",
    });
  }
});

export default router;
