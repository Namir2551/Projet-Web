import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Accueil</NavLink>
    </li>
    <li>
      <NavLink to="/stagesEmployeurs">Stage (Employeur)</NavLink>
    </li>
    <li>
      <NavLink to="/profilsStagiaires">Profils Stagiaires</NavLink>
    </li>
    <li>
      <NavLink to="/stagesEtudiant">Stage (Étudiants)</NavLink>
    </li>
    <li>
      <NavLink to="/FAQ">FAQ</NavLink>
    </li>
    <li>
      <NavLink to="/ajoutStage">Ajouter stage</NavLink>
    </li>
    <li>
      <NavLink to="/listeStage">Liste stage</NavLink>
    </li>
    <li>
      <NavLink to="/ajoutEtudiant">Ajouter étudiant</NavLink>
    </li>
    <li>
      <NavLink to="/listeEtudiant">Liste étudiant</NavLink>
    </li>
  </ul>
};

export default NavLinks;