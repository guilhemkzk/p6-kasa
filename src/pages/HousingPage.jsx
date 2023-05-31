import { useParams } from "react-router-dom";
import annonces from "../data/annonces.json";
import Slider from "../components/slider/Slider";
import StarScale from "../components/StarScale";
import DropDownItem from "../components/DropDownItem";

function FicheLogement() {
  const { name } = useParams();
  let logement = {};

  for (let item of annonces) {
    if (item.id === name) {
      logement = item;
    }
  }

  // if (Object.keys(logement).length === 0) {
  //   navigate("/error");
  // }

  return (
    <div className="fiche page">
      <Slider slides={logement.pictures} />

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

      <div className="fiche-resume">
        <div className="fiche-resume-motsclefs">
          {" "}
          <ul>
            {logement.tags.map((tag) => (
              <li key={logement.id + "_tag" + tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="fiche-resume-rating">
          <StarScale scaleValue={logement.rating} />
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

export default FicheLogement;
