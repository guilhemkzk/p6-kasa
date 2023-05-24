import React from "react";
import { useParams } from "react-router-dom";
import annonces from "../data/annonces.json";

function FicheLogement() {
  const { name } = useParams();
  let logement = {};

  for (let item of annonces) {
    if (item.id === name) {
      logement = item;
    }
  }

  console.log(logement);

  return (
    <div className="fiche">
      <div className="banner">
        <img src={logement.cover} alt="Background" />
      </div>

      <div className="fiche-header">
        <div className="fiche-header-title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>

        <div className="fiche-proprio">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="Propriétaire" />
        </div>
      </div>

      <div className="fiche-description">
        <div className="fiche-description-motsclefs">
          {" "}
          <ul>
            {logement.tags.map((tag) => (
              <li key={logement.id + "_tag" + tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="fiche-rating">{logement.rating}</div>
      </div>

      <div className="fiche-details">
        <div className="fiche-details-description">
          <h2>Description</h2>
          {logement.description}
        </div>
        <div className="fiche-details-equipements">
          <h2>Equipements</h2>{" "}
          <ul>
            {logement.equipments.map((equip) => (
              <li key={logement.id + "_equip" + equip}>{equip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
