const { response } = require("express");
const {v4 : uuidv4} = require("uuid");
const HttpErreur = require("../models/http-erreur");

const Stage = require("../models/stages");
const Etudiant = require("../models/etudiant");

// get 
const getEtudiant = async (requete, reponse, next) => {
  let etudiant;
  try {
    etudiant = await Etudiant.find();
  } catch (err) {
    return next(
      new HttpErreur("Erreur lors de la récupération du etudiant", 500)
    );
  }
  reponse.json({
    etudiant: etudiant.map((etudiant) =>
    etudiant.toObject({ getters: true })
    ),
  });
};
  

// creation Etudiant 
const ajouterEtudiant= async (requete, reponse, next) => {
    const {numDA, nomEtudiant, courrielEtudiant, profilSortieEtudiant } = requete.body;
    let etudiantExiste;

    try {
      etudiantExiste = await Etudiant.findOne({ numDA: numDA });
    } catch {
        return next(new HttpErreur("Échec vérification etudiant existe", 500));
    }

    if (etudiantExiste) {
        return next(
            new HttpErreur("Etudiant existe déjà. Veuillez rééssayer", 422)
        );
    }
    const nouveauEtudiant = new Etudiant({
        numDA, 
        nomEtudiant, 
        courrielEtudiant, 
        profilSortieEtudiant,
    });
    try {
      await nouveauEtudiant.save();
    } catch (err) {
      const erreur = new HttpErreur("Ajoue de l'étudiant a échouée", 500);
      return next(erreur);
    }
    reponse.status(201).json({ etudiant: nouveauEtudiant.toObject({ getter: true }) });
  };
/*
const ajouterEtudiantStage = async (requete, reponse, next) =>{
    const etudiantId = requete.params.etudiantId;
    const stageId = requete.params.stageId;
    let infoStage
    let infoEtu

    // etu id 
    try {
      infoEtu = await Etudiant.findById(etudiantId);
    } catch(err) {
      return next(
        new HttpErreur("Erreur lors de la récupération de l'étudiant", 500)
      );
    }
    if (!infoEtu) {
      return next(new HttpErreur("Aucune étudiant trouvé pour l'id fourni", 404));
    }

    // stage id 
    try {
      infoStage = await Stage.findById(stageId);
    } catch(err) {
      return next(
        new HttpErreur("Erreur lors de la récupération du stage", 500)
      );
    }
    if (!infoStage) {
      return next(new HttpErreur("Aucune stage trouvé pour l'id fourni", 404));
    }

    try{
      infoStage.etudiants.push(infoEtu.prenom)
      await infoStage.save()
    }catch(err){
      const erreur = new HttpErreur("Rajout du l'etudiant échouer", 500);
      return next(erreur);
    }
    reponse.status(200).json({ infoStage: infoStage.toObject({getters: true}) });


}

*/
// export 
exports.ajouterEtudiant = ajouterEtudiant;
exports.getEtudiant = getEtudiant;
//exports.ajouterEtudiantStage = ajouterEtudiantStage;
