const { check, validationResult } = require("express-validator");
const Award = require("../models/Awards");
// @ Desc       Get all Award
// @ route      GET /api/v1/awards
// @ access     Public
exports.getAllAwards = async (req, res, next) => {
  try {
    const awards = await Award.find();
    res.status(200).json({ success: true, count: awards.length, data: awards });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Get Award
// @ route      GET /api/v1/award/:id
// @ access     Public
exports.getAward = async (req, res, next) => {
  try {
    const award = await Award.findById(req.params.id);
    if (!award) {
      return res.status(400).json({
        success: false,
        msg: `No award found with the ID ${req.params.id}`
      });
    }
    res.status(200).json({
      success: true,
      data: award
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Add Award
// @ route      POST /api/v1/awards
// @ access     Private
exports.CreateAward = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const award = await Award.create(req.body);
    res.status(201).json({ success: true, data: award });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Update Award
// @ route      PUT /api/v1/award/:id
// @ access     Private
exports.UpdateAward = async (req, res, next) => {
  try {
    const award = await Award.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!award) {
      return res.status(400).json({
        success: false,
        msg: `No award found with the ID ${req.params.id}`
      });
    }
    res.status(201).json({ success: true, data: award });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Delete Award
// @ route      DELETE /api/v1/award/:id
// @ access     Private
exports.DeleteAward = async (req, res, next) => {
  try {
    const award = await Award.findById(req.params.id);
    if (!award) {
      return next(
        new ErrorResponse(`Award not found with the id ${req.params.id}`, 404)
      );
    }
    award.remove();
    res.status(201).json({ success: true, data: {} });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
