import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";

import "./Professeur.css";

function Professeur({ professeur }) {
  return (
    <li className="card-prof">
        <Card className="card-prof__content">
          <Link>
            <div className="card-prof__image">
              <Avatar photo={professeur.photo} alt={professeur.nom + ", " + professeur.prenom} />
            </div>
            <div className="card-prof__info">
              <h2>{professeur.nom + ", " + professeur.prenom}</h2>
              <ul>
                  {professeur.cours.map((cour) => (
                    <li>{cour}</li>
                  ))}
              </ul>
            </div>
          </Link>
        </Card>
    </li>
  );
}

export default Professeur;
