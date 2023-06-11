import TruncateText from "../../utils/TruncateText";

function GalleryItem(item) {
  return (
    <div
      className="gallery-item-internal-container"
      key={item.item.id + "_cont"}
    >
      <span key={item.item.id + "_span"}>
        <TruncateText input={item.item.title} size={45} />
      </span>
      <img
        key={item.item.id + "_image"}
        src={item.item.cover}
        alt={item.item.title}
      />
    </div>
  );
}

export default GalleryItem;
