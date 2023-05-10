import React from 'react';

import Card from '../../shared/Card';
import Etudiant from './Etudiant';
import './ListeEtudiant.css';

const EtudiantList = props => {
  if (props.items.length === 0) {
    return (
      <div className="etudiant-list center">
        <Card>
          <h2>Aucun Étudiant Inscrit</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="etudiant-list">
      {props.items.map(etudiant => (
        <Etudiant
          key={etudiant.id}
          id={etudiant.id}
          numDA={etudiant.numDA}
          nomEtudiant={etudiant.nomEtudiant}
          courrielEtudiant={etudiant.courrielEtudiant}
          profilSortieEtudiant={etudiant.profilSortieEtudiant}
        />
      ))}
    </ul>
  );
};

export default EtudiantList;
