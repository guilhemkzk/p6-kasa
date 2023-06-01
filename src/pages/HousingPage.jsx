import { useParams, Navigate } from "react-router-dom";
import annonces from "../data/annonces.json";
import Slider from "../components/slider/Slider";
import StarScale from "../components/StarScale";
import DropDownItem from "../components/DropDownItem";

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
    <div className="fiche page">
      <Slider slides={logement.pictures} />

      <div className="fiche-header">
        <div className="fiche-header-highlights">
          <div className="fiche-header-highlights-main">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>

          <div className="fiche-header-highlights-keywords">
            {" "}
            <ul>
              {logement.tags.map((tag) => (
                <li key={logement.id + "_tag" + tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="fiche-header-secondary">
          <div className="fiche-header-other-owner">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="Propriétaire" />
          </div>
          <div className="fiche-header-other-rating">
            <StarScale scaleValue={logement.rating} />
          </div>
        </div>
      </div>

      <div className="fiche-details">
        <DropDownItem title="Description" content={logement.description} />

        <DropDownItem
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
