const express = require("express");
const userController = require("./app/controllers/ControllerUsers.js");
const occurrenceController = require("./app/controllers/ControllerOccurrences.js");
const evidenceController = require("./app/controllers/ControllerEvidences.js");
const analysisController = require("./app/controllers/ControllerAnalysis");
const upload = require("./config/multerConfig");
const uploadAnalysis = require("./config/multerConfigAnalysis.js");

const router = express.Router();

const authMiddleware = require("./app/middlewares/auth.js");

// router.use(authMiddleware); ---> Se o Middleware de autenticação estiver nesta altura,
//ele se aplica automaticamente a todas as rotas

//USERS
router.post("/users", userController.store);
router.get("/users", authMiddleware, userController.index);
router.get("/users/:id", userController.findOne);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

router.post("/users/login", userController.login);

//OCCURRENCES
router.post("/users/occurrences/:id", occurrenceController.store);
router.get("/users/occurrences/all", occurrenceController.index);
router.get("/users/occurrences/:id", occurrenceController.findOne);
router.put("/users/occurrences/:id", occurrenceController.update);
router.delete("/users/occurrences/:id", occurrenceController.delete);

//EVIDENCES
router.post(
  "/occurrences/:id/evidences",
  upload.single("file"),
  evidenceController.store
);
router.get(
  "/occurrences/:id/evidences",
  evidenceController.allEvidencesFromOccurrence
);
router.get("/evidences/:id", evidenceController.findOne);
router.put("/evidences/:id", upload.single("file"), evidenceController.update);
router.delete("/evidences/:id", evidenceController.delete);
router.get("/evidences", evidenceController.getAll);

// ANALYSIS
router.post(
  "/occurrences/:id/analysis",
  uploadAnalysis,
  analysisController.store
);

module.exports = router;
