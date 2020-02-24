const express = require("express");
const router = express.Router();
const {
  getAllConference,
  getConference,
  UpdateConference,
  CreateConference,
  DeleteConference
} = require("../../controllers/conference");

router.get("/", getAllConference);
router.get("/:id", getConference);
router.post("/", CreateConference);
router.put("/:id", UpdateConference);
router.delete("/:id", DeleteConference);

module.exports = router;
