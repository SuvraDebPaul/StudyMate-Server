const express = require("express");
const {
  createPartner,
  getPartners,
  getPartnerById,
  updatePartner,
  deletePartner,
} = require("../controller/partners.controller");

const router = express.Router();

router.post("/", createPartner);
router.get("/", getPartners);
router.get("/:id", getPartnerById);
router.patch("/:id", updatePartner);
router.delete("/:id", deletePartner);

module.exports = router;
