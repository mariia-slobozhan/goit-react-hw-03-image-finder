import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ images }) {
  return (
    <>
      {images.map((image) => (
        <li key={image.id} className={s.imageGalleryItem}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={s.imageGalleryItemImage}
          />
        </li>
      ))}
    </>
  );
}
