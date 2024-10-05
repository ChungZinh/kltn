const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");
const { asyncHandler } = require("../helpers/asyncHandler");

router.post("/login", asyncHandler(AuthController.login));
router.post("/register", asyncHandler(AuthController.register));
module.exports = router;
