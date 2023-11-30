const express = require("express");
const userController = require("../src/controllers/userController.js");
const occurrenceController = require("../src/controllers/occurrenceController.js");

const router = express.Router();

const authMiddleware = require("./middlewares/auth.js");

// router.use(authMiddleware); ---> Se o Middleware de autenticação estiver nesta altura,
//ele se aplica automaticamente a todas as rotas

router.post("/users", userController.store);
router.get("/users", authMiddleware, userController.index);
router.get("/users/:id", userController.findOne);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

router.post("/users/login", userController.login);

router.post("/users/occurrences/:id", occurrenceController.store);
router.get("/occurrences", occurrenceController.index);
router.get("/occurrences/:id", occurrenceController.findOne);
router.put("/occurrences/:id", occurrenceController.update);
router.delete("/occurrences/:id", occurrenceController.delete);

module.exports = router;
