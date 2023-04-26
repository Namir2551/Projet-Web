const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");

const Cours = require("../models/cours");
const Prof = require("../models/prof");
const Etudiant = require("../models/etudiant");


const getCoursById = async (requete, reponse, next) => {
  const coursId = requete.params.coursId;
  let cours;
  try {
    cours = await Cours.findById(coursId);
  } catch (err) {
    return next(
      new HttpErreur("Erreur lors de la récupération du cours", 500)
    );
  }
  if (!cours) {
    return next(new HttpErreur("Aucun cours trouvée pour l'id fourni", 404));
  }
  reponse.json({cours: cours.toObject({ getters: true }) });
};

const creerCours = async (requete, reponse, next) => {
  const { titre, discipline, nbEtudiantMax, dateDebut, dateFin} = requete.body;
  const profId = requete.params.profId
  let prof;
  let coursExiste;

  try {
      coursExiste = await Cours.findOne({ titre: titre });
  } catch {
      return next(new HttpErreur("Échec vérification cours existe", 500));
  }

  if (coursExiste) {
      return next(
          new HttpErreur("Cours existe déjà. Veuillez rééssayer", 422)
      );
  }
  try {
    prof = await Prof.findById(profId);
  } catch (err) {
    return next(
      new HttpErreur("Erreur lors de la récupération du prof", 500)
    );
  }
  if (!prof) {
    return next(new HttpErreur("Aucun prof trouvée pour l'id fourni", 404));
  }
  const nouveauCours = new Cours({
    titre,
    prof,
    etudiants: [],
    discipline,
    nbEtudiantMax,
    dateDebut,
    dateFin
  });

  try {
    await nouveauCours.save();
    prof.listeCour.push(nouveauCours.titre);
    await prof.save();
  } catch (err) {
    const erreur = new HttpErreur("Création de cours échouée", 500);
    return next(erreur);
  }
  reponse.status(201).json({ cours: nouveauCours });
};

const modifierCours = async (requete, reponse, next) => {
  const { titre, nbEtudiantMax, dateDebut, dateFin} = requete.body;
  const coursId = requete.params.coursId;
  let cours;

  try {
    cours = await Cours.findById(coursId);
  } catch (err) {
    return next(
      new HttpErreur("Erreur lors de la récupération du cours", 500)
    );
  }
  if (!cours) {
    return next(new HttpErreur("Aucun cours trouvé pour l'id fourni", 404));
  }

  try {
    cours.titre = titre;
    cours.nbEtudiantMax = nbEtudiantMax;
    cours.dateDebut = dateDebut;
    cours.dateFin = dateFin;
    await cours.save();
  } catch (err){
      const erreur = new HttpErreur("Erreur lors de la mise à jour du cours", 500)
      return next(erreur);
  }

  reponse.status(200).json({ cours: cours.toObject({ getters: true }) });
};

const supprimerCours = async (requete, reponse, next) => {
  const coursId = requete.params.coursId;
  let cours;
  try {
    cours = await Cours.findById(coursId).populate("prof");
  } catch (err){
    return next(
      new HttpErreur("Erreur lors de la recherche du cours", 500)
    );
  }
  if(!cours){
    return next(new HttpErreur("Impossible de trouver le cours", 404));
  }

  try{
    await cours.deleteOne();
  }catch (err){
    return next(
      new HttpErreur("Erreur lors de la suppression du cours", 500)
    );
  }
  reponse.status(200).json({ message: "Cours supprimé" });
};

exports.getCoursById = getCoursById;
exports.creerCours = creerCours;
exports.modifierCours = modifierCours;
exports.supprimerCours = supprimerCours;
