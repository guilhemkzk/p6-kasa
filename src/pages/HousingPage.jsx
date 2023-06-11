import { useParams, Navigate } from "react-router-dom";
import annonces from "../data/annonces.json";

import Slider from "../components/slider/Slider";
import StarScale from "../components/StarScale";
import DropDown from "../components/DropDown";

function HousingPage() {
  const { name } = useParams();
  let logement = {};

  for (let item of annonces) {
    if (item.id === name) {
      logement = item;
    }
  }

  if (Object.keys(logement).length === 0) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="housing page">
      <Slider slides={logement.pictures} />

      <div className="housing-header">
        <div className="housing-header-highlights">
          <div className="housing-header-highlights-main">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>

          <div className="housing-header-highlights-keywords">
            {" "}
            <ul>
              {logement.tags.map((tag) => (
                <li key={logement.id + "_tag" + tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="housing-header-secondary">
          <div className="housing-header-other-owner">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="Propriétaire" />
          </div>
          <div className="housing-header-other-rating">
            <StarScale scaleValue={logement.rating} />
          </div>
        </div>
      </div>

      <div className="housing-details">
        <DropDown title="Description" content={logement.description} />

        <DropDown
          title="Equipements"
          content={
            <ul>
              {logement.equipments.map((equip) => (
                <li key={logement.id + "_equip" + equip}>{equip}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default HousingPage;
