import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./listeEtudiant.css";
import ListeEtudiant from "../components/ListeEtudiant";
import { useHttpClient } from "../../shared/hooks/http-hook";

const ListeEtudiantPage = () => {

    const {error, sendRequest, clearError } = useHttpClient();
    const [loadedEtudiants, setLoadedEtudiants] = useState();

    useEffect(() => {
        const fetchEtudiants = async () => {
          try {
            const responseData = await sendRequest(
              process.env.REACT_APP_BACKEND_URL + `/etudiants/listeEtudiant`
            );
            setLoadedEtudiants(responseData.etudiant);
          } catch (err) {

          }
        };
        fetchEtudiants();
      }, [sendRequest]);

    return (
        <React.Fragment>
            <h1>LISTE DES ÉTUDIANT</h1>
            {loadedEtudiants && <ListeEtudiant items={loadedEtudiants} />}
        </React.Fragment>
    );
  }
export default ListeEtudiantPage;
