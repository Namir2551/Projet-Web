import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";

import Card from '../../shared/Card';
import './Etudiant.css';

const EtudiantItem = props => {

  return (
    <React.Fragment>
      <li className="card-etudiant">
        <Card className="card-etudiant__content">
            <Link to={"/ListeStage/"} className="link-unstyled">
            <div className="card-prof__info">
                <p id = "etu">{props.numDA}</p>
                <p id = "etu">{props.nomEtudiant}</p>
                <p>{props.courrielEtudiant}</p>
                <p>{props.profilSortieEtudiant}</p>
            </div>
            </Link>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default EtudiantItem;
