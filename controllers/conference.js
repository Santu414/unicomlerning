// @ Desc       Get all Conferences
// @ route      GET /api/v1/conferences
// @ access     Public
exports.getAllConference = async (req, res, next) => {
  res.status(200).json({ msg: "get All conference" });
};

// @ Desc       Get Conference
// @ route      GET /api/v1/conference/:id
// @ access     Public
exports.getConference = async (req, res, next) => {
  res.status(200).json({ msg: "get a conference" });
};

// @ Desc       Add Conference
// @ route      POST /api/v1/conference
// @ access     Private
exports.CreateConference = async (req, res, next) => {
  res.status(201).json({ msg: "Conference created" });
};

// @ Desc       Update Conference
// @ route      PUT /api/v1/conference/:id
// @ access     Private
exports.UpdateConference = async (req, res, next) => {
  res.status(201).json({ msg: "Conference Updated" });
};

// @ Desc       Delete Conference
// @ route      DELETE /api/v1/conference/:id
// @ access     Private
exports.DeleteConference = async (req, res, next) => {
  res.status(201).json({ msg: "Conference Deleted" });
};
