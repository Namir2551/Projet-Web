const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coursSchema = new Schema({
    titre:{type: String, required: true},
    etudiants: {type: Array, required: true},
    prof:{type: mongoose.Types.ObjectId, required: true, ref:"Prof"},
    discipline:{type: String, required: true},
    nbEtudiantMax:{type: String, required: true},
    dateDebut:{type: String, required: true},
    dateFin:{type: String, required: true}

});

module.exports = mongoose.model("Cours", coursSchema);