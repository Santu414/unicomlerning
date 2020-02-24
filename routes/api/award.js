const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const {
  getAllAwards,
  getAward,
  CreateAward,
  UpdateAward,
  DeleteAward
} = require("../../controllers/award");

router.get("/", getAllAwards);
router.get("/:id", getAward);
router.post(
  "/",
  [
    check("awardName", "Award Name is required")
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
