function GalleryItem(item) {
  return (
    <img
      key={item.item.id + "_image"}
      src={item.item.cover}
      alt={item.item.title}
    />
  );
}

export default GalleryItem;
