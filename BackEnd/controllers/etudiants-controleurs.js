const { response } = require("express");
const {v4 : uuidv4} = require("uuid");
const HttpErreur = require("../models/http-erreur");
const Etudiant = require("../models/etudiant");

const Cours = require("../models/cours");
const cours = require("../models/cours");

// get 
const getEtudiant = async (requete, reponse, next) => {
    const etudiantId = requete.params.etudiantId;
    let infoEtu;
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
    reponse.json({ etu: infoEtu.toObject({getters:true}) });
};
  

// creation Etudiant 
const ajouterEtudiant= async (requete, reponse, next) => {
    const { nom, prenom, numAd } = requete.body;
    let etuExiste;

    try {
      etuExiste = await Etudiant.findOne({ numAd: numAd });
    } catch {
        return next(new HttpErreur("Échec vérification etudiant existe", 500));
    }

    if (etuExiste) {
        return next(
            new HttpErreur("Etudiant existe déjà. Veuillez rééssayer", 422)
        );
    }
    const nouveauEtudiant = new Etudiant({
        // info
        nom,
        prenom,
        numAd,
    });
    try {
      await nouveauEtudiant.save();
    } catch (err) {
      const erreur = new HttpErreur("Ajoue de l'étudiant a échouée", 500);
      return next(erreur);
    }
    reponse.status(201).json({ infoEtu: nouveauEtudiant });
  };


// supprimer Etudiant 

const supprimerEtudiant = async (requete, reponse, next) => {
    const etudiantId = requete.params.etudiantId;
    let etu;
    try{
        etu = await Etudiant.findByIdAndRemove(etudiantId);
    }catch{
      return next(new HttpErreur("Erreur lors de la suppression de l'étudiant", 500));
    }
    // TODO:supprime le du cours 
    reponse.status(200).json({ message: "Étudiant supprimé !" });
};


// modifier Etudiant 
const modifierEtu = async (requete, reponse, next) => {
    const {numAd} = requete.body;
    const etudiantId = requete.params.etudiantId;
    let etuModi;
  
    try {
      etuModi = await Etudiant.findById(etudiantId);
    } catch (err) {
      return next(
        new HttpErreur("Erreur lors de la récupération de l'étudiant", 500)
      );
    }
    if (!etuModi) {
      return next(new HttpErreur("Aucun étudiant trouvée pour l'id fourni", 404));
    }

    try{
        etuModi.numAd = numAd;
      await etuModi.save();
    }catch{
      return next(new HttpErreur("Erreur lors de la modification de l'étudiant", 500));
    }
  
    reponse.status(200).json({ InfoEtu: etuModi.toObject({getters: true}) });
  };

const ajoueEtuCours = async (requete, reponse, next) =>{
    const etudiantId = requete.params.etudiantId;
    const coursId = requete.params.coursId;
    let infoCours
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

    // cours id 
    try {
      infoCours = await Cours.findById(coursId);
    } catch(err) {
      return next(
        new HttpErreur("Erreur lors de la récupération du cours", 500)
      );
    }
    if (!infoCours) {
      return next(new HttpErreur("Aucune cours trouvé pour l'id fourni", 404));
    }

    try{
      infoCours.etudiants.push(infoEtu.prenom)
      await infoCours.save()
    }catch(err){
      const erreur = new HttpErreur("Rajout du l'etudiant échouer", 500);
      return next(erreur);
    }
    reponse.status(200).json({ infoCours: infoCours.toObject({getters: true}) });


}


// export 
exports.ajouterEtudiant = ajouterEtudiant;
exports.supprimerEtudiant = supprimerEtudiant;
exports.getEtudiant = getEtudiant;
exports.modifierEtu = modifierEtu;
exports.ajoueEtuCours = ajoueEtuCours;
