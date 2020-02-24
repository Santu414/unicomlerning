const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const {
  getAllConference,
  getConference,
  UpdateConference,
  CreateConference,
  DeleteConference
} = require("../../controllers/conference");

router.get("/", getAllConference);
router.get("/:id", getConference);
router.post(
  "/",
  [
    check("conferenceName", "Conference Name is required")
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
  CreateConference
);
router.put("/:id", UpdateConference);
router.delete("/:id", DeleteConference);

module.exports = router;
