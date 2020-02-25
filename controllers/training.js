const Training = require("../models/Training");
const { check, validationResult } = require("express-validator");

// @ Desc       Get all Trainings
// @ route      GET /api/v1/trainings
// @ access     Public
exports.getAllTrainings = async (req, res, next) => {
  try {
    const training = await Training.find();
    res
      .status(200)
      .json({ success: true, count: training.length, data: training });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Get Training
// @ route      GET /api/v1/training/:id
// @ access     Public
exports.getTraining = async (req, res, next) => {
  try {
    const training = await Training.findById(req.params.id);
    if (!training) {
      return res.status(400).json({
        success: false,
        msg: `No award found with the ID ${req.params.id}`
      });
    }
    res.status(200).json({
      success: true,
      data: training
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Add Training
// @ route      POST /api/v1/training
// @ access     Private
exports.CreateTraining = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const training = await Training.create(req.body);
    res.status(201).json({ success: true, data: training });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Update Training
// @ route      PUT /api/v1/training/:id
// @ access     Private
exports.UpdateTraining = async (req, res, next) => {
  try {
    const training = await Training.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!training) {
      return res.status(400).json({
        success: false,
        msg: `No awTrainingard found with the ID ${req.params.id}`
      });
    }
    res.status(201).json({ success: true, data: training });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Delete Training
// @ route      DELETE /api/v1/training/:id
// @ access     Private
exports.DeleteTraining = async (req, res, next) => {
  try {
    const training = await Training.findById(req.params.id);
    if (!training) {
      return next(
        new ErrorResponse(
          `Training not found with the id ${req.params.id}`,
          404
        )
      );
    }
    training.remove();
    res.status(201).json({ success: true, data: {} });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
