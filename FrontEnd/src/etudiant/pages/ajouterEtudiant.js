import React from "react";
import "./ajouterEtudiant.css";

function AjouterEtudiant() {
    return (
        <div className="nouveau-etudiant">
        <form>
            <div className='nouveau-etudiant__controls'>
                <div className='nouveau-etudiant__control'>
                    <label>Numero d'admission</label>
                    <input
                        type='text'
                    />
                </div>
                <div className='nouveau-etudiant__control'>
                    <label>Nom</label>
                    <input
                        type='text'
                    />
                </div>
                <div className='nouveau-etudiant__control'>
                    <label>Courriel</label>
                    <input
                        type='text'
                    />
                </div>
                <div className='nouveau-etudiant__control'>
                    <label>Profil de sortie</label>
                    <input
                        type='text'
                    />
                </div>
            </div>
            <div className='nouveau-etudiant__actions'>
                <button type='submit'>Ajouter Étudiant</button>
            </div>
        </form>
        </div>
    );
  }
  
  export default AjouterEtudiant;