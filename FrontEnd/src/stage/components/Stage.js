import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";

import Card from "../../shared/Card";
import "./Stage.css";

const Cours = props => {
  return (
    <React.Fragment>
      <li className="card-etudiant">
        <Card className="card-etudiant__content">
            <div className="card-prof__info">
                <p id="stage">{props.nomContact}</p>
                <p id="stage">{props.courrielContact}</p>
                <p>{props.numContact}</p>
                <p>{props.nomEntreprise}</p>
                <p>{props.adresseEntreprise}</p>
                <p>{props.typeStage}</p>
                <p>{props.nbPosteDispo}</p>
                <p>{props.description}</p>
                <p>{props.renumeration}</p>
            </div>
        </Card>
      </li>
    </React.Fragment>
   
  );
}

export default Cours;