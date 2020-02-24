const express = require("express");
const router = express.Router();

const {
  getAllContests,
  getContest,
  UpdateContest,
  CreateContest,
  DeleteContest
} = require("../../controllers/contest");

router.get("/", getAllContests);
router.get("/:id", getContest);
router.post("/", CreateContest);
router.put("/:id", UpdateContest);
router.delete("/:id", DeleteContest);

module.exports = router;
