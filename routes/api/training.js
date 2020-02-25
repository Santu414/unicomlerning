const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const {
  getAllTrainings,
  getTraining,
  CreateTraining,
  UpdateTraining,
  DeleteTraining
} = require("../../controllers/training");

router.get("/", getAllTrainings);
router.get("/:id", getTraining);
router.post(
  "/",
  [
    check("trainingName", "Training Name is required")
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
  CreateTraining
);
router.put("/:id", UpdateTraining);
router.delete("/:id", DeleteTraining);

module.exports = router;
