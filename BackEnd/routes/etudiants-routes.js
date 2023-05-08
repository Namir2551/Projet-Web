const express = require("express");

const controleursEtudiant = require("../controllers/etudiants-controleurs")
const router = express.Router();

router.get("/listeEtudiant",controleursEtudiant.getEtudiant);

router.post('/ajouterEtudiant',controleursEtudiant.ajouterEtudiant);

//router.post('/ajouterEtudiantStage',controleursEtudiant.ajouterEtudiantStage);

module.exports = router;