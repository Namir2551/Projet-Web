import React, { useState } from 'react';
import './FormulaireCour.css';

const FormulaireCour = ({onCancel, ajouterCour}) => {
  const [saisieTitre, setSaisieTitre] = useState('');
  const [saisieDiscipline, setSaisieDiscipline] = useState('');
  const [saisieNbMax, setSaisieNbMax] = useState('');
  const [saisieDateDebut, setSaisieDateDebut] = useState('');
  const [saisieDateFin, setSaisieDateFin] = useState('');


  const changementTitreHandler = (event) => {
    setSaisieTitre(event.target.value);
  };

  const changementDisciplineHandler = (event) => {
    setSaisieDiscipline(event.target.value);
  };

  const changementNbMaxHandler = (event) => {
    setSaisieNbMax(event.target.value);
  };

  const changementDateDebutHandler = (event) => {
    setSaisieDateDebut(event.target.value);
  };

  const changementDateFinHandler = (event) => {
    setSaisieDateFin(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const id = Math.random().toString();
    const donneesCour = {
      id: id,
      titre: saisieTitre,
      discipline: saisieDiscipline,
      nbMaxEtu: saisieNbMax,
      dateDebut: new Date(saisieDateDebut),
      dateFin: new Date(saisieDateFin),
      session: "H23"
    };
    if(saisieTitre === "" && saisieDiscipline === "" && saisieNbMax  === "" && saisieDateDebut === "" && saisieDateFin === ""){
      alert("Vous devez saisir les données")
    }else if (saisieTitre === ""){
      alert("Vous devez saisir un Tire de cours")
    }else if(saisieDiscipline === ""){
      alert("Vous devez saisir une Discipline")
    }else if(saisieNbMax === ""){
      alert("Vous devez saisir un nombre d'étudiant maximum")
    }else if (saisieDateDebut === "" || saisieDateFin === ""){
      alert("Vous devez saisir une date de début ET de fin")
    } else {

      ajouterCour(donneesCour);
      setSaisieTitre('');
      setSaisieDiscipline('');
      setSaisieNbMax('');
      setSaisieDateDebut('');
      setSaisieDateFin('');
    }
    };

  return (
    <form onSubmit={submitHandler}>
      <div className='NouveauCours__controls'>
        <div className='NouveauCours__control'>
          <label>Titre</label>
          <input
            type='text'
            value={saisieTitre}
            onChange={changementTitreHandler}
          />
        </div>
        <div className='NouveauCours__control'>
          <label>Discipline</label>
          <input
            type='text'
            value={saisieDiscipline}
            onChange={changementDisciplineHandler}
          />
        </div>
        <div className='NouveauCours__control'>
          <label>Nombre d'étudiant maximum</label>
          <input
            type='number'
            min='1'
            step='1'
            value={saisieNbMax}
            onChange={changementNbMaxHandler}
          />
        </div>
        <div className='NouveauCours__control'>
          <label>Date de début</label>
          <input
            type='date'
            value={saisieDateDebut}
            min='2023-01-01'
            max='2023-06-06'
            onChange={changementDateDebutHandler}
          />
        </div>
        <div className='NouveauCours__control'>
          <label>Date de fin</label>
          <input
            type='date'
            value={saisieDateFin}
            min='2023-01-01'
            max='2023-06-06'
            onChange={changementDateFinHandler}
          />
        </div>
      </div>
      <div className='NouveauCours__actions'>
        <button type="button" onClick={onCancel}>Annuler</button>
        <button type='submit'>Ajouter Cour</button>
      </div>
    </form>
  );
};

export default FormulaireCour;
