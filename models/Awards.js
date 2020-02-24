const mongoose = require("mongoose");
const AwardsSchema = new mongoose.Schema({
  awardName: {
    type: String,
    required: true
  },
  // images: {
  //   type: String,
  //   required: true
  // },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  }
});

module.exports = Awards = mongoose.model("award", AwardsSchema);
