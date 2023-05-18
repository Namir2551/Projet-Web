const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coursSchema = new Schema({
    nomContact:{type: String, required: true},
    courrielContact: {type: String, required: true},
    numContact:{type: String, required: true},
    nomEntreprise:{type: String, required: true},
    adresseEntreprise:{type: String, required: true},
    typeStage:{type: String, required: true},
    nbPosteDispo:{type: String, required: true},
    description:{type: String, required: true},
    renumeration:{type: String, required: true}
});

module.exports = mongoose.model("Stages", coursSchema);