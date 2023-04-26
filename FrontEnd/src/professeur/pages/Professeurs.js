import React, { useState } from "react";
import ListeProfesseurs from "../components/ListeProfesseurs";
import NouveauProf from "../nouveauProfesseur/NouveauProf";

function Professeurs() {
  const [professeurs, setProfesseurs] = useState([
    {
      id: "p1",
      dateEmbauche: new Date(2023, 5, 15),
      nom: "Leduc",
      prenom: "Micheal",
      photo: "https://www.pngfind.com/pngs/m/435-4356543_derpy-hooves-female-mare-pegasus-pony-safe-sunglasses.png",
      cours: ["Objet Connectée", "Structure de donnée"],
    },
    {
      id: "p2",
      dateEmbauche: new Date(2023, 7, 21),
      nom: "Delzozo",
      prenom: "Coco",
      photo: "https://4.bp.blogspot.com/-oX5MCM16YoQ/Wh8RrLwG4EI/AAAAAAABNUg/QltezsjmUHEACRGjct7MG12JFRvMX38qwCKgBGAs/s1600/CastleCreator_Fluttershy5.png",
      cours: ["Web et base de donnée"],
    },
    {
      id: "p3",
      dateEmbauche: new Date(2023, 2, 11),
      nom: "Lorant",
      prenom: "Frédéric",
      photo: "https://b.gamiplay.ru/games/create.mylittlepony.movie/images/question2_p2.png",
      cours: ["Analyse et conception de diagramme UML", "Environnement graphique client"],
    },
  ]);

  function ajouterProfesseur(nouveauProfesseur) {
    setProfesseurs(professeurs.concat(nouveauProfesseur));
  }

  return ( 
    <div>
      <NouveauProf ajouterProfesseur={ajouterProfesseur}/>
      <ListeProfesseurs professeurs={professeurs} />
    </div>
    );
};

export default Professeurs;
