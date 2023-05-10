import React, { useState } from 'react';

import FiltreStage from '../components/FiltreStage'

import ListeStages from '../components/ListeStages';
import './ListeStage.css';


const NouveauCour = ({ajouterCour,cours}) => {
    //const [enEdition, setEnEdition] = useState(false);
  
    /*
    const ouvrirFormulaireHandler = () => {
      setEnEdition(true);
    };
  
    const fermerFormulaireHandler = () => {
      setEnEdition(false);
    };
    */
  
    const [filtreAnnee, setFiltreAnnee] = useState("H23");
  
    const filtrerChangeHandler = (selectedAnnee) => {
      setFiltreAnnee(selectedAnnee);
    };
  
    const anneeFiltrees = cours.filter((cour) => {
      return cour.session === filtreAnnee;
    });
  
    return (
      <div className='NouveauCours'>
  
  
        <FiltreStage
          selected = {filtreAnnee}
          onChangementFiltre = {filtrerChangeHandler}
        />
        <p>hi</p>
        <ListeStages 
          cours={anneeFiltrees}
        />
      </div>
    );
  };
  
  export default NouveauCour;