import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./listeStage.css";
import ListeStages from "../components/ListeStages";

const ListeStagePage = () => {
    const [loadedStage, setLoadedEtudiants] = useState([
        {
            
            nomContact:"BAJOUR",
            courrielContact:"BAJOUR",
            numContact:"BAJOUR",
            nomEntreprise:"BAJOUR",
            adresseEntreprise:"BAJOUR",
            typeStage:"BAJOUR",
            nbPosteDispo:"BAJOUR",
            description:"BAJOUR",
            renumeration:"BAJOUR",

          },

    ]);

    return (

        <React.Fragment>
            <h1>LISTE DES STAGES</h1>
            <ListeStages items={loadedStage} />
        </React.Fragment>
    );
  }
export default ListeStagePage;