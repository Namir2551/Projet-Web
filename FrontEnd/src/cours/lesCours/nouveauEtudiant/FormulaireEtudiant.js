import React, { useState } from 'react';

import './FormulaireEtudiant.css';

const FormulaireEtudiant = ({onCancel, ajouterEtudiant}) => {
  const [saisieNom, setSaisieNom] = useState('');
  const [saisiePrenom, setSaisiePrenom] = useState('');
  const [saisieNumAdmission, setSaisieNumAdmission] = useState('');

  
  const changementNomHandler = (event) => {
    setSaisieNom(event.target.value);
  };

  const changementPrenomHandler = (event) => {
    setSaisiePrenom(event.target.value);
  };

  const changementNumAdmissionHandler = (event) => {
    setSaisieNumAdmission(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const donneesEtudiant = {
      nom: saisieNom,
      prenom: saisiePrenom,
      numAdmission: saisieNumAdmission,
    };
    if(saisieNom === "" && saisiePrenom ==="" && saisieNumAdmission ===""){
      alert("Vous devez saisir les données")
    }else if (saisieNom === ""){
      alert("Vous devez saisir un Nom")
    }else if(saisiePrenom === ""){
      alert("Vous devez saisir un Prenom")
    }else if(saisieNumAdmission === ""){
      alert("Vous devez saisir le numéro d'admission")
    }else {
      ajouterEtudiant(donneesEtudiant);
      setSaisieNom('');
      setSaisiePrenom('');
      setSaisieNumAdmission('');
    }
  };


  return (
    <form onSubmit={submitHandler}>
      <div className='nouveau-etudiant__controls'>
        <div className='nouveau-etudiant__control'>
          <label>Nom</label>
          <input
            type='text'
            value={saisieNom}
            onChange={changementNomHandler}
          />
        </div>
        <div className='nouveau-etudiant__control'>
          <label>Prenom</label>
          <input
            type='text'
            value={saisiePrenom}
            onChange={changementPrenomHandler}
          />
        </div>
        <div className='nouveau-etudiant__control'>
          <label>NumAdmission</label>
          <input
            type='text'
            value={saisieNumAdmission}
            onChange={changementNumAdmissionHandler}
            pattern="^[0-9]+$"
            title="Le numéro d'admission doit contenir que des chiffres"
          />
        </div>
      </div>
      <div className='nouveau-etudiant__actions'>
        <button type="button" onClick={onCancel}>Annuler</button>
        <button type='submit'>Ajouter Etudiant</button>
      </div>
    </form>
  );
};

export default FormulaireEtudiant;
