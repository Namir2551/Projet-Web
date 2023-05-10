import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/Card";
import "./Stage.css";

function Cours({ id, nomContact, courrielContact,  numContact,nomEntreprise,
          adresseEntreprise, typeStage,nbPosteDispo, description,renumeration}) {
  return (
    <li className="card-cours">
      <p>Hi</p>
        <Card className="card-cours__content">
          <Link to={"/stage/" + id}>
          <div className="card-cours__info">
              <h2>{titre}</h2>
              <h2>{nomContact}</h2>
              <h2>{courrielContact}</h2>
              <h2>{numContact}</h2>
              <h2>{nomEntreprise}</h2>
              <h2>{adresseEntreprise}</h2>
              <h2>{typeStage}</h2>
              <h2>{nbPosteDispo}</h2>
              <h2>{description}</h2>
              <h2>{renumeration}</h2>
              
            </div>
          </Link>
        </Card>
        
    </li>
   
  );
}

export default Cours;