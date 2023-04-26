const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");

const Prof = require("../models/prof");
const Cours = require("../models/cours");

const ajouterProf = async (requete, reponse, next) => {
    const { nom, prenom, dateEmbauche } = requete.body;
    let profExiste;

    try {
        profExiste = await Prof.findOne({ nom: nom });
    } catch {
        return next(new HttpErreur("Échec vérification prof existe", 500));
    }

    if (profExiste) {
        return next(
            new HttpErreur("Prof existe déjà. Veuillez rééssayer", 422)
        );
    }
    const nouveauProf = new Prof({
        nom,
        prenom,
        dateEmbauche,
        photo:
            "https://previews.123rf.com/images/microphoto1981/microphoto19811710/microphoto1981171000024/88705547-ic%C3%B4ne-de-profil-avatar-par-d%C3%A9faut-marqueur-de-photo-gris-profil-par-d%C3%A9faut-masculin-image-de.jpg",
        listeCour:[],
    });
  
    try {
      await nouveauProf.save();
    } catch (err) {
      const erreur = new HttpErreur("Création de prof échouée", 500);
      return next(erreur);
    } 
    reponse.status(201).json({ prof: nouveauProf });
  };

const getProfById = async (requete, reponse, next) => {
  const profId = requete.params.profId;
  let prof;
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
  reponse.json({ prof: prof.toObject({ getters: true }) });
};

const modifierProf = async (requete, reponse, next) => {
    const { dateEmbauche, photo } = requete.body;
    const profId = requete.params.profId;
    let prof;
  
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

    try {
        prof.dateEmbauche = dateEmbauche;
        prof.photo = photo;
        await prof.save();
    } catch (err) {
        const erreur = new HttpErreur("Modification du prof échouée", 500);
        return next(erreur);
    }
  
    reponse.status(200).json({ prof: prof.toObject({ getters: true }) });
  };

  const supprimerProf = async (requete, reponse, next) => {
    const profId = requete.params.profId;
    let prof;
    //let cours;
    try {
        prof = await Prof.findById(profId);
    } catch {
      return next(
        new HttpErreur("Erreur lors de la récupération du prof", 500)
      );
    }
    if(!prof){
      return next(new HttpErreur("Impossible de trouver le prof", 404));
    }
    
    /*try {
        cours = await Cours.findOne(prof.id = profId);
      } catch (err) {
        return next(
          new HttpErreur("Erreur lors de la récupération du cours", 500)
        );
      }
      if (!cours || Cours.find() == null) {
        return next(new HttpErreur("Aucun cour trouvée avec le prof fourni", 404));
      }*/
    try{
      await prof.deleteOne();
      //await cours.prof.deleteOne();
      //await cours.save();     
    }catch (err) {
        const erreur = new HttpErreur("Erreur lors de la suppression du prof", 500);
        return next(erreur);
    }
    reponse.status(200).json({ message: "Prof supprimée" });
  };

  const ajouterCourProf = async (requete, reponse, next) => {
    const coursId = requete.params.coursId;
    let cours;
    const profId = requete.params.profId
    let prof;

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
    try {
        cours = await Cours.findById(coursId);
      } catch (err) {
        return next(
          new HttpErreur("Erreur lors de la récupération du cours", 500)
        );
      }
      if (!cours) {
        return next(new HttpErreur("Aucun cour trouvée pour l'id fourni", 404));
      }
    try {
        prof.listeCour.push(cours.titre);
        await prof.save();
    } catch (err) {
        const erreur = new HttpErreur("Rajout du cours échouer", 500);
        return next(erreur);
    } 
    reponse.status(201).json({ prof: prof.toObject({ getters: true }) });
  };

exports.ajouterProf = ajouterProf;
exports.getProfById = getProfById;
exports.modifierProf = modifierProf;
exports.supprimerProf = supprimerProf;
exports.ajouterCourProf = ajouterCourProf;