import React from "react";
import "./ListeProfesseurs.css";
import Professeur from "./Professeur";
import Card from "../../shared/Card";

function ListeProfesseurs(props) {
  if (props.professeurs.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun professeur</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="prof">
      {props.professeurs.map((professeur) => (
        <Professeur key={professeur.id} professeur={professeur} />
      ))}
    </ul>
  );
}

export default ListeProfesseurs;
