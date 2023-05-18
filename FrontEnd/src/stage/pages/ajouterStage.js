import React, { useEffect, useState } from "react";
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./ajouterStage.css";

function AjouterStage() {
    const {error, sendRequest, clearError } = useHttpClient();
    const [saisieNomContact, setSaisieNomContact] = useState('');
    const [saisieCourrielContact, setSaisieCourrielContact] = useState('');
    const [saisieNumContact, setSaisieNumContact] = useState('');
    const [saisieNomEntreprise, setSaisieNomEntreprise] = useState('');
    const [saisieAdresseEntreprise, setSaisieAdresseEntreprise] = useState('');
    const [saisieTypeStage, setSaisieTypeStage] = useState('');
    const [saisieNbPosteDispo, setSaisieNbPosteDispo] = useState('');
    const [saisieDescription, setSaisieDescription] = useState('');
    const [saisieRenumeration, setSaisieRenumeration] = useState('');

    const changementNomContactHandler = (event) => {
      setSaisieNomContact(event.target.value);
    };

    const changementCourrielContactHandler = (event) => {
      setSaisieCourrielContact(event.target.value);
    };

    const changementNumContactHandler = (event) => {
      setSaisieNumContact(event.target.value);
    };

    const changementNomEntrepriseHandler = (event) => {
      setSaisieNomEntreprise(event.target.value);
    };

    const changementAdresseEntrepriseHandler = (event) => {
      setSaisieAdresseEntreprise(event.target.value);
    };

    const changementTypeStageHandler = (event) => {
      setSaisieTypeStage(event.target.value);
    };

    const changementNbPosteDispoHandler = (event) => {
      setSaisieNbPosteDispo(event.target.value);
    };

    const changementDescriptionHandler = (event) => {
      setSaisieDescription(event.target.value);
    };

    const changementRenumerationHandler = (event) => {
      setSaisieRenumeration(event.target.value);
    };

      const stageSubmitHandler  = async event =>  {
        event.preventDefault();
    
        try {
          const reponseData = await sendRequest(
            "http://localhost:5000/api/stages/ajouterStage",
            "POST",
            JSON.stringify({
                nomContact: saisieNomContact,
                courrielContact: saisieCourrielContact,
                numContact: saisieNumContact,
                nomEntreprise: saisieNomEntreprise,
                adresseEntreprise: saisieAdresseEntreprise,
                typeStage: saisieTypeStage,
                nbPosteDispo: saisieNbPosteDispo,
                description: saisieDescription,
                renumeration: saisieRenumeration,
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
        <div className="nouveau-stage">
        <form onSubmit={stageSubmitHandler}>
            <div className='nouveau-stage__controls'>
                <div className='nouveau-stage__control'>
                    <label>Nom du contact</label>
                    <input
                        id="nomContact"
                        type='text'
                        onChange={changementNomContactHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Courriel du contact</label>
                    <input
                        id="courrielContact"
                        type='text'
                        onChange={changementCourrielContactHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Numéro du contact</label>
                    <input
                        id="numContact"
                        type='text'
                        onChange={changementNumContactHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Nom de l'entreprise</label>
                    <input
                        id="nomEntreprise"
                        type='text'
                        onChange={changementNomEntrepriseHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Adresse de l'entreprise</label>
                    <input
                        id="adresseEntreprise"
                        type='text'
                        onChange={changementAdresseEntrepriseHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Type de stage</label>
                    <input
                        id="typeStage"
                        type='text'
                        onChange={changementTypeStageHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Nombre de poste disponible</label>
                    <input
                        id="nbPosteDispo"
                        type='text'
                        onChange={changementNbPosteDispoHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Description</label>
                    <input
                        id="description"
                        type='text'
                        onChange={changementDescriptionHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Rénumeration</label>
                    <input
                        id="renumeration"
                        type='text'
                        onChange={changementRenumerationHandler}
                    />
                </div>
            </div>
            <div className='nouveau-stage__actions'>
                <button type='submit'>Ajouter Stage</button>
            </div>
        </form>
        </div>
    );
  }
  
  export default AjouterStage;