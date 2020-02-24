// @ Desc       Get all Contests
// @ route      GET /api/v1/contests
// @ access     Public
exports.getAllContests = async (req, res, next) => {
  res.status(200).json({ msg: "get All Contests" });
};

// @ Desc       Get Award
// @ route      GET /api/v1/contest/:id
// @ access     Public
exports.getContest = async (req, res, next) => {
  res.status(200).json({ msg: "get a Contest" });
};

// @ Desc       Add Award
// @ route      POST /api/v1/contest
// @ access     Private
exports.CreateContest = async (req, res, next) => {
  res.status(201).json({ msg: "Contest created" });
};

// @ Desc       Update Award
// @ route      PUT /api/v1/contest/:id
// @ access     Private
exports.UpdateContest = async (req, res, next) => {
  res.status(201).json({ msg: "contest Updated" });
};

// @ Desc       Delete Award
// @ route      DELETE /api/v1/contest/:id
// @ access     Private
exports.DeleteContest = async (req, res, next) => {
  res.status(201).json({ msg: "contest Deleted" });
};
