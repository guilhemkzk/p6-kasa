import annonces from "../data/annonces.json";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="gallery">
      {annonces.map((log) => (
        <div
          key={log.id}
          className="gallery-item"
          onClick={(e) => {
            e.preventDefault();
            navigate("/fiche/" + log.id);
          }}
        >
          <span key={log.id + "_span"}> {log.title}</span>
          <img key={log.id + "_image"} src={log.cover} alt={log.title} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
