const express = require("express");
const router = express.Router();
router.use("/api/v1/auth", require("./auth.route"));

module.exports = router;
