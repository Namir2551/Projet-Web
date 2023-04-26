const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profSchema = new Schema({
    nom:{type: String, required: true},
    prenom: {type: String, required: true},
    dateEmbauche: {type: String, required: true},
    photo: {type: String, required: true},
    listeCour:{type: Array, required: true}
});

module.exports = mongoose.model("Prof", profSchema);