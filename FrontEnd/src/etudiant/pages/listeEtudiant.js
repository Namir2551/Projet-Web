import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./listeEtudiant.css";
import ListeEtudiant from "../components/ListeEtudiant";
import { useHttpClient } from "../../shared/hooks/http-hook";

const ListeEtudiantPage = () => {
    const [loadedEtudiant, setLoadedEtudiant] = useState([
        {
            id: "1",
            numDA: "123",
            nomEtudiant: "Guillaume",
            courrielEtudiant: "Gui@hotmail.com",
            profilSortieEtudiant: "D",
          },
    ]);
    const {error, sendRequest, clearError } = useHttpClient();
    const [loadedEtudiants, setLoadedEtudiants] = useState();

    useEffect(() => {
        const fetchEtudiants = async () => {
          try {
            const responseData = await sendRequest(
              `http://localhost:5000/api/etudiants/listeEtudiant`
            );
            setLoadedEtudiants(responseData.etudiants);
          } catch (err) {

          }
        };
        fetchEtudiants();
      }, [sendRequest]);

    return (
        <React.Fragment>
            {loadedEtudiants && <ListeEtudiant items={loadedEtudiants} />}
        </React.Fragment>
    );
  }
export default ListeEtudiantPage;
