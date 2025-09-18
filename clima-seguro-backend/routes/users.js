// routes/users.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Rota de cadastro
router.post("/register", userController.register);

module.exports = router;
