import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/Card";
import "./Cours.css";

function Cours({ id, titre }) {
  return (
    <li className="card-cours">
        <Card className="card-cours__content">
          <Link to={"/cours/" + id}>
          <div className="card-cours__info">
              <h2>{titre}</h2>
            </div>
          </Link>
        </Card>
    </li>
  );
}

export default Cours;