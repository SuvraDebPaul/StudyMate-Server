const express = require("express");
const router = express.Router();
const { createPartnerRequest } = require("../controller/requestController");

router.post("/", createPartnerRequest);

module.exports = router;
