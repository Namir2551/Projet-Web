import React, { useState } from "react";
import NouveauEtudiant from "../nouveauEtudiant/NouveauEtudiant";

import './LesCours.css'

function LesCours() {
    const [lesEtudiants, setLesEtudiants] = useState([
      {
        nom: "Giguère",
        prenom: "Guillaume",
        numAdmission: "1",
      },
      {
        nom: "Kas Nasrallah",
        prenom: "Namir",
        numAdmission: "2",
      },
      {
        nom: "Giguère",
        prenom: "Gabriel",
        numAdmission: "3",
      },
      {
        nom: "Luc",
        prenom: "Jean",
        numAdmission: "4",
      },
      {
        nom: "Armend",
        prenom: "Christophe",
        numAdmission: "5",
      },
      {
        nom: "pot",
        prenom: "Emanuelle",
        numAdmission: "6",
      },
      {
        nom: "Gort",
        prenom: "Nadia",
        numAdmission: "7",
      },
      {
        nom: "Tremblay",
        prenom: "Noémie",
        numAdmission: "8",
      },
    ]);

    function ajouterEtudiant(nouveauEtudiant) {
      setLesEtudiants(lesEtudiants.concat(nouveauEtudiant));
    }
  
  return ( 
    <div>
        <NouveauEtudiant ajouterEtudiant={ajouterEtudiant}/>
        <div className="paragraphe-center">
            <h2>Les étudiants</h2>
            <ul>
                {lesEtudiants.map((etu) => (
                    <li className="paragraphe-center">{etu.prenom + " " + etu.nom} </li>
                ))}
            </ul>
        </div>
    </div>
    );
};

export default LesCours;