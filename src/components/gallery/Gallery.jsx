import annonces from "../../data/annonces.json";
import { useNavigate } from "react-router-dom";
import GalleryItem from "./GalleryItem";

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
            navigate("/fiches/" + log.id);
          }}
        >
          <span key={log.id + "_span"}> {log.title}</span>
          <GalleryItem item={log} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
