import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./listeEtudiant.css";
import ListeEtudiant from "../components/ListeEtudiant";

const ListeEtudiantPage = () => {
    const [loadedEtudiants, setLoadedEtudiants] = useState([
        {
            id: "1",
            numDA: "123",
            nomEtudiant: "Guillaume",
            courrielEtudiant: "Gui@hotmail.com",
            profilSortieEtudiant: "D",
          },
    ]);

    return (
        <React.Fragment>
            <ListeEtudiant items={loadedEtudiants} />
        </React.Fragment>
    );
  }
export default ListeEtudiantPage;
