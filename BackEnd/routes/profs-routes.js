const express = require("express");

const controleursProfs = require("../controllers/profs-controleurs")
const router = express.Router();

router.post('/ajouter', controleursProfs.ajouterProf);

router.get('/:profId', controleursProfs.getProfById);

router.patch('/:profId', controleursProfs.modifierProf);

router.delete('/:profId', controleursProfs.supprimerProf);

router.post('/:profId/:coursId', controleursProfs.ajouterCourProf);

module.exports = router;