const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const {
  getAllContests,
  getContest,
  UpdateContest,
  CreateContest,
  DeleteContest
} = require("../../controllers/contest");

router.get("/", getAllContests);
router.get("/:id", getContest);
router.post(
  "/",
  [
    check("contestName", "Contest Name is required")
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
  CreateContest
);
router.put("/:id", UpdateContest);
router.delete("/:id", DeleteContest);

module.exports = router;
