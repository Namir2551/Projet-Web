const express = require("express");

const controleursEtudiant = require("../controllers/etudiants-controleurs")
const router = express.Router();

router.get("/:etudiantId",controleursEtudiant.getEtudiant);

router.post('/ajoueEtu',controleursEtudiant.ajouterEtudiant);

router.post('/:etudiantId/:coursId',controleursEtudiant.ajoueEtuCours)

router.patch("/:etudiantId",controleursEtudiant.modifierEtu);

router.delete("/:etudiantId",controleursEtudiant.supprimerEtudiant);

module.exports = router;