import React, { useState } from 'react';

import FiltreSession from '../components/FiltreSession';
import FormulaireCour from './FormulaireCour';
import ListeCours from '../components/ListeCours';
import './NouveauCour.css';

const NouveauCour = ({ajouterCour,cours}) => {
  const [enEdition, setEnEdition] = useState(false);

  const ouvrirFormulaireHandler = () => {
    setEnEdition(true);
  };

  const fermerFormulaireHandler = () => {
    setEnEdition(false);
  };

  const [filtreAnnee, setFiltreAnnee] = useState("H23");

  const filtrerChangeHandler = (selectedAnnee) => {
    setFiltreAnnee(selectedAnnee);
  };

  const anneeFiltrees = cours.filter((cour) => {
    return cour.session === filtreAnnee;
  });

  return (
    <div className='NouveauCours'>
      {!enEdition && (
        <button onClick={ouvrirFormulaireHandler}>Ajouter un nouveau Cours</button>
      )}
      {enEdition && (
        <FormulaireCour
          onCancel = {fermerFormulaireHandler}
          ajouterCour = {ajouterCour}
        />
      )}
      <FiltreSession
        selected = {filtreAnnee}
        onChangementFiltre = {filtrerChangeHandler}
      />
      <ListeCours 
        cours={anneeFiltrees}
      />
    </div>
  );
};

export default NouveauCour;
