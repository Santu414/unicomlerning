const express = require("express");
const { check, validationResult } = require("express-validator");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const {
  getAllAwards,
  getAward,
  CreateAward,
  UpdateAward,
  DeleteAward
} = require("../../controllers/award");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", getAllAwards);
router.get("/:id", getAward);
router.post(
  "/",
  upload.single("image"),
  [
    check("awardName", "Award Name is required")
      .not()
      .isEmpty(),
    check("image", "Image is required")
      .not()
      .isEmpty(),
    check("city", "City is required")
      .not()
      .isEmpty(),
    check("country", "Country is required")
      .not()
      .isEmpty(),
    check("from", "From Date is required")
      .not()
      .isEmpty(),
    check("to", "to Date is required")
      .not()
      .isEmpty()
  ],

  CreateAward
);
router.put("/:id", UpdateAward);
router.delete("/:id", DeleteAward);

module.exports = router;
