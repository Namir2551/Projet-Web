import React from "react";
import "./ListeCours.css";
import Cours from "./Cours";
import Card from "../../shared/Card";

function ListeCours(props) {
    if (props.cours.length === 0) {
      return (
        <div className="center">
          <Card>
            <h2>Aucun cours</h2>
          </Card>
        </div>
      );
    }
  
    return (
      <ul className="list-cours">
        {props.cours.map((cour) => (
          <Cours
          id={cour.id}
          titre={cour.titre}
          discipline={cour.discipline}
          />
        ))}
      </ul>
    );
  }
  
  export default ListeCours;