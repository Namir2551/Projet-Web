import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./ajouterEtudiant.css";

const AjouterEtudiant = () => {
    const {error, sendRequest, clearError } = useHttpClient();
    const [saisieNumDA, setSaisieNumDA] = useState('');
    const [saisieNom, setSaisieNom] = useState('');
    const [saisieCourriel, setSaisieCourriel] = useState('');
    const [saisieProfilSortie, setSaisieProfilSortie] = useState('');

    const changementNomHandler = (event) => {
        setSaisieNom(event.target.value);
    };

    const changementNumDAHandler = (event) => {
        setSaisieNumDA(event.target.value);
    };

    const changementCourrielHandler = (event) => {
        setSaisieCourriel(event.target.value);
    };

    const changementProfilSortieHandler = (event) => {
        setSaisieProfilSortie(event.target.value);
    };

    const etudiantSubmitHandler  = async event =>  {
        event.preventDefault();

        try {
        const reponseData = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + `/etudiants/ajouterEtudiant`,
            "POST",
            JSON.stringify({
            numDA: saisieNumDA,
            nomEtudiant: saisieNom,
            courrielEtudiant: saisieCourriel,
            profilSortieEtudiant: saisieProfilSortie,
            }),
            {
            "Content-Type": "application/json",
            }
        );
        console.log(reponseData);
        } catch (err) {
        console.log(err);
        }
    };

    return (
        <div className="nouveau-etudiant">
        <form onSubmit={etudiantSubmitHandler}>
            <div className='nouveau-etudiant__controls'>
                <div className='nouveau-etudiant__control'>
                    <label>Numero d'admission</label>
                    <input
                        id="numDA"
                        type='text'
                        onChange={changementNumDAHandler}
                    />
                </div>
                <div className='nouveau-etudiant__control'>
                    <label>Nom</label>
                    <input
                        id="nomEtudiant"
                        type='text'
                        onChange={changementNomHandler}
                    />
                </div>
                <div className='nouveau-etudiant__control'>
                    <label>Courriel</label>
                    <input
                        id="courrielEtudiant"
                        type='text'
                        onChange={changementCourrielHandler}
                    />
                </div>
                <div className='nouveau-etudiant__control'>
                    <label>Profil de sortie</label>
                    <input
                        id="profilSortieEtudiant"
                        type='text'
                        onChange={changementProfilSortieHandler}
                    />
                </div>
            </div>
            <div className='nouveau-etudiant__actions'>
                <button id="btnETU"type='submit'>Ajouter Étudiant</button>
            </div>
        </form>
        </div>
    );
  }
  
  export default AjouterEtudiant;