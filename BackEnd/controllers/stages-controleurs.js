const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");

const Stage = require("../models/stage");
const Etudiant = require("../models/etudiant");


const getStage = async (requete, reponse, next) => {
  let stage;
  try {
    stage = await Stage.find({}, "-renumeration");
  } catch (err) {
    return next(
      new HttpErreur("Erreur lors de la récupération du stage", 500)
    );
  }
  reponse.json({
    stage: stage.map((stage) =>
    stage.toObject({ getters: true })
    ),
  });
};

const ajouterStage = async (requete, reponse, next) => {
  const { nomContact, courrielContact, numContact, nomEntreprise, adresseEntreprise, typeStage, nbPosteDispo, description, renumeration} = requete.body;
  let stageExiste;

  try {
      stageExiste = await Stage.findOne({ nomEntreprise: nomEntreprise });
  } catch {
      return next(new HttpErreur("Échec vérification stage existe", 500));
  }

  if (stageExiste) {
      return next(
          new HttpErreur("Stage existe déjà. Veuillez rééssayer", 422)
      );
  }
  const nouveauStage = new Stage({
    nomContact,
    courrielContact,
    numContact,
    nomEntreprise,
    adresseEntreprise,
    typeStage,
    nbPosteDispo,
    description,
    renumeration
  });

  try {
    await nouveauStage.save();
  } catch (err) {
    const erreur = new HttpErreur("Création de stage échouée", 500);
    return next(erreur);
  }
  reponse.status(201).json({ stage: nouveauStage.toObject({ getter: true }) });
};

exports.getStage = getStage;
exports.ajouterStage = ajouterStage;
