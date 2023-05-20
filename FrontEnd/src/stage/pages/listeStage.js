import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./listeStage.css";
import ListeStages from "../components/ListeStages";
import { useHttpClient } from "../../shared/hooks/http-hook";

const ListeStagePage = () => {
    const {error, sendRequest, clearError } = useHttpClient();
    const [loadedStages, setLoadedStages] = useState();

    useEffect(() => {
        const fetchStages = async () => {
          try {
            const responseData = await sendRequest(
              process.env.REACT_APP_BACKEND_URL + `/stages/listeStage`
            );
            setLoadedStages(responseData.stage);
          } catch (err) {

          }
        };
        fetchStages();
      }, [sendRequest]);

    return (
        <React.Fragment>
            <h1>LISTE DES STAGES</h1>
            {loadedStages && <ListeStages items={loadedStages} />}
        </React.Fragment>
    );
  }
export default ListeStagePage;