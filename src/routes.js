const express = require("express");
const userController = require("../src/controllers/userController.js");

const router = express.Router();

router.get("/users", userController.index);
router.post("/users", userController.store);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

module.exports = router;
