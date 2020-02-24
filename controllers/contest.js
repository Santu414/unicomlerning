const { check, validationResult } = require("express-validator");
const Contest = require("../models/Contest");
// @ Desc       Get all Contests
// @ route      GET /api/v1/contests
// @ access     Public
exports.getAllContests = async (req, res, next) => {
  try {
    const contest = await Contest.find();
    res
      .status(200)
      .json({ success: true, count: contest.length, data: contest });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Get Award
// @ route      GET /api/v1/contest/:id
// @ access     Public
exports.getContest = async (req, res, next) => {
  try {
    const contest = await Contest.findById(req.params.id);
    if (!contest) {
      return res.status(400).json({
        success: false,
        msg: `No award found with the ID ${req.params.id}`
      });
    }
    res.status(200).json({
      success: true,
      data: contest
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Add Award
// @ route      POST /api/v1/contest
// @ access     Private
exports.CreateContest = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const contest = await Contest.create(req.body);
    res.status(201).json({ success: true, data: contest });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Update Award
// @ route      PUT /api/v1/contest/:id
// @ access     Private
exports.UpdateContest = async (req, res, next) => {
  try {
    const contest = await Contest.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!contest) {
      return res.status(400).json({
        success: false,
        msg: `No award found with the ID ${req.params.id}`
      });
    }
    res.status(201).json({ success: true, data: contest });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @ Desc       Delete Award
// @ route      DELETE /api/v1/contest/:id
// @ access     Private
exports.DeleteContest = async (req, res, next) => {
  try {
    const contest = await Contest.findById(req.params.id);
    if (!contest) {
      return next(
        new ErrorResponse(`Award not found with the id ${req.params.id}`, 404)
      );
    }
    contest.remove();
    res.status(201).json({ success: true, data: {} });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
