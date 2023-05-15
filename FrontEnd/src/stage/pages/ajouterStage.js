import React, { useEffect, useState } from "react";
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./ajouterStage.css";

function AjouterStage() {
    const {error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
          nomContact: {
            value: '',
            isValid: false
          },
          courrielContact: {
            value: '',
            isValid: false
          },
          numContact: {
            value: '',
            isValid: false
          },
          nomEntreprise: {
            value: '',
            isValid: false
          },
          adresseEntreprise: {
            value: '',
            isValid: false
          },
          typeStage: {
            value: '',
            isValid: false
          },
          nbPosteDispo: {
            value: '',
            isValid: false
          },
          description: {
            value: '',
            isValid: false
          },
          renumeration: {
            value: '',
            isValid: false
          }
        },
        false
      );

      const stageSubmitHandler  = async event =>  {
        console.log("test")
        event.preventDefault();
        console.log(formState.inputs);
    
        try {
          const reponseData = await sendRequest(
            "http://localhost:5000/api/stages/ajouterStage",
            "POST",
            JSON.stringify({
                nomContact: formState.inputs.nomContact.value,
                courrielContact: formState.inputs.courrielContact.value,
                numContact: formState.inputs.numContact.value,
                nomEntreprise: formState.inputs.nomEntreprise.value,
                adresseEntreprise: formState.inputs.adresseEntreprise.value,
                typeStage: formState.inputs.typeStage.value,
                nbPosteDispo: formState.inputs.nbPosteDispo.value,
                description: formState.inputs.description.value,
                renumeration: formState.inputs.renumeration.value,
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
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Courriel du contact</label>
                    <input
                        id="courrielContact"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Numéro du contact</label>
                    <input
                        id="numContact"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Nom de l'entreprise</label>
                    <input
                        id="nomEntreprise"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Adresse de l'entreprise</label>
                    <input
                        id="adresseEntreprise"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Type de stage</label>
                    <input
                        id="typeStage"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Nombre de poste disponible</label>
                    <input
                        id="nbPosteDispo"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Description</label>
                    <input
                        id="description"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
                <div className='nouveau-stage__control'>
                    <label>Rénumeration</label>
                    <input
                        id="renumeration"
                        type='text'
                        onInput={inputHandler}
                    />
                </div>
            </div>
            <div className='nouveau-stage__actions'>
                <button type='submit' disabled={!formState.isValid}>Ajouter Stage</button>
            </div>
        </form>
        </div>
    );
  }
  
  export default AjouterStage;