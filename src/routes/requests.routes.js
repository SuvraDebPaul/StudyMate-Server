const express = require("express");
const router = express.Router();
const {
  createPartnerRequest,
  getPartnerRequests,
  deletePartnerRequest,
} = require("../controller/requestController");

router.post("/", createPartnerRequest);
router.get("/", getPartnerRequests);
router.delete("/:id", deletePartnerRequest);

module.exports = router;
