const express = require("express");
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
router.post("/", CreateTraining);
router.put("/:id", UpdateTraining);
router.delete("/:id", DeleteTraining);

module.exports = router;
