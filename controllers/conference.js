const Conference = require("../models/Conference");
const { check, validationResult } = require("express-validator");

// @ Desc       Get all Conferences
// @ route      GET /api/v1/conferences
// @ access     Public
exports.getAllConference = async (req, res, next) => {
  try {
    const conferences = await Conference.find();
    res
      .status(200)
      .json({ success: true, count: conferences.length, data: conferences });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Get Conference
// @ route      GET /api/v1/conference/:id
// @ access     Public
exports.getConference = async (req, res, next) => {
  try {
    const conference = await Conference.findById(req.params.id);
    if (!conference) {
      return res.status(400).json({
        success: false,
        msg: `No award found with the ID ${req.params.id}`
      });
    }
    res.status(200).json({
      success: true,
      data: conference
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Add Conference
// @ route      POST /api/v1/conference
// @ access     Private
exports.CreateConference = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const conference = await Conference.create(req.body);
    res.status(201).json({ success: true, data: conference });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Update Conference
// @ route      PUT /api/v1/conference/:id
// @ access     Private
exports.UpdateConference = async (req, res, next) => {
  try {
    const conference = await Conference.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (!conference) {
      return res.status(400).json({
        success: false,
        msg: `No award found with the ID ${req.params.id}`
      });
    }
    res.status(201).json({ success: true, data: conference });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Delete Conference
// @ route      DELETE /api/v1/conference/:id
// @ access     Private
exports.DeleteConference = async (req, res, next) => {
  try {
    const conference = await Conference.findById(req.params.id);
    if (!conference) {
      return next(
        new ErrorResponse(`Award not found with the id ${req.params.id}`, 404)
      );
    }
    conference.remove();
    res.status(201).json({ success: true, data: {} });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
