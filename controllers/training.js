// @ Desc       Get all Trainings
// @ route      GET /api/v1/trainings
// @ access     Public
exports.getAllTrainings = async (req, res, next) => {
  res.status(200).json({ msg: "get All Trainings" });
};

// @ Desc       Get Training
// @ route      GET /api/v1/training/:id
// @ access     Public
exports.getTraining = async (req, res, next) => {
  res.status(200).json({ msg: "get a Trainings" });
};

// @ Desc       Add Training
// @ route      POST /api/v1/training
// @ access     Private
exports.CreateTraining = async (req, res, next) => {
  res.status(201).json({ msg: "Training created" });
};

// @ Desc       Update Training
// @ route      PUT /api/v1/training/:id
// @ access     Private
exports.UpdateTraining = async (req, res, next) => {
  res.status(201).json({ msg: "Training Updated" });
};

// @ Desc       Delete Training
// @ route      DELETE /api/v1/training/:id
// @ access     Private
exports.DeleteTraining = async (req, res, next) => {
  res.status(201).json({ msg: "Training Deleted" });
};
