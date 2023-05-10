import React from "react";
import "./ListeStages.css";
import Card from "../../shared/Card";
import Stage from "../components/Stage"
function ListeStage(props) {
    if (props.stage.length === 0) {
      return (
        <div className="center">
          <Card>
            <h2>Aucun Stage</h2>
          </Card>
        </div>
      );
    }
  
    return (
      <ul className="list-cours">
        {props.stage.map((stage) => (
          <Stage
          id={stage.id}
          nomContact={stage.nomContact}
          courrielContact= {stage.courrielContact}
          numContact={stage.numContact}
          nomEntreprise={stage.nomEntreprise}
          adresseEntreprise={stage.adresseEntreprise}
          typeStage={stage.typeStage}
          nbPosteDispo={stage.nbPosteDispo}
          description={stage.description}
          renumeration={stage.renumeration}
          
          />
        ))}
      </ul>
    );
  }
  
  export default ListeStage;