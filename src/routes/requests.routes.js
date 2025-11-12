const express = require("express");
const router = express.Router();
const {
  createPartnerRequest,
  getPartnerRequests,
  deletePartnerRequest,
  getPartnerRequestsById,
  updatePartnerRequest,
} = require("../controller/requests.Controller");

router.post("/", createPartnerRequest);
router.get("/", getPartnerRequests);
router.get("/:id", getPartnerRequestsById);
router.patch("/:id", updatePartnerRequest);
router.delete("/:id", deletePartnerRequest);

module.exports = router;
