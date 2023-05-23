import annonces from "../data/annonces.json";

function Gallery() {
  return (
    <div className="gallery">
      {annonces.map((log) => (
        <div className="gallery-item">
          <span key={log.id}> {log.title}</span>
          <img key={log.id} src={log.cover} alt={log.title} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
