const express = require("express");

const controleursStage = require("../controllers/stages-controleurs")
const router = express.Router();

router.get("/listeStage", controleursStage.getStage);

router.post('/ajouterStage', controleursStage.ajouterStage);

module.exports = router;

