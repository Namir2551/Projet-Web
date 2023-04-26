import React, { useState } from 'react';

import FormulaireProf from './FormulaireProf';
import './NouveauProf.css';

const NouveauProf = ({ajouterProfesseur}) => {
  const [enEdition, setEnEdition] = useState(false);

  const ouvrirFormulaireHandler = () => {
    setEnEdition(true);
  };

  const fermerFormulaireHandler = () => {
    setEnEdition(false);
  };

  return (
    <div className='nouveau-prof'>
      {!enEdition && (
        <button onClick={ouvrirFormulaireHandler}>Ajouter un nouveau professeur</button>
      )}
      {enEdition && (
        <FormulaireProf
          onCancel = {fermerFormulaireHandler}
          ajouterProfesseur = {ajouterProfesseur}
        />
      )}
    </div>
  );
};

export default NouveauProf;
