require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const multerUploadMiddleware = multer({ storage });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

app.post("/user/upload-profile", multerUploadMiddleware.single("profile-pic"), async (req, res) => {
  try {
    const { mimetype: fileType, path: filePath } = req.file;

    if (!(fileType === "image/jpeg" || fileType === "image/png" || fileType === "image/jpg")) {
      return res.status(400).send("File type not supported");
    }

    const fileUploadData = await cloudinary.uploader.upload(filePath, {
      folder: "profile-picture"
    });

    console.log(fileUploadData);

    res.json({
      message: "Upload successful",
      url: fileUploadData.secure_url,
      public_id: fileUploadData.public_id
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("File upload failed");
  }
});

app.listen(5555, () => {
  console.log("Server running at http://localhost:5555/");
});
