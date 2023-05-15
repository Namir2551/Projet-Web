import React, { useEffect, useState } from "react";
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./ajouterEtudiant.css";

const AjouterEtudiant = () => {
    const {error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
          numDA: {
            value: '',
            isValid: false
          },
          nomEtudiant: {
            value: '',
            isValid: false
          },
          courrielEtudiant: {
            value: '',
            isValid: false
          },
          profilSortieEtudiant: {
            value: '',
            isValid: false
          }
        },
        false
      );

      const etudiantSubmitHandler  = async event =>  {
        console.log("test")
        event.preventDefault();
        console.log(formState.inputs);
    
        try {
          const reponseData = await sendRequest(
            "http://localhost:5000/api/etudiants/ajouterEtudiant",
            "POST",
            JSON.stringify({
              numDA: formState.inputs.numDA.value,
              nomEtudiant: formState.inputs.nomEtudiant.value,
              courrielEtudiant: formState.inputs.courrielEtudiant.value,
              profilSortieEtudiant: formState.inputs.profilSortieEtudiant.value,
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
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-etudiant__control'>
                    <label>Nom</label>
                    <input
                        id="nom"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-etudiant__control'>
                    <label>Courriel</label>
                    <input
                        id="courriel"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-etudiant__control'>
                    <label>Profil de sortie</label>
                    <input
                        id="profilSortie"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
            </div>
            <div className='nouveau-etudiant__actions'>
                <button type='submit' disabled={!formState.isValid}>Ajouter Étudiant</button>
            </div>
        </form>
        </div>
    );
  }
  
  export default AjouterEtudiant;