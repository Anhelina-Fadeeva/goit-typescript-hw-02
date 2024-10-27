import ImageCard from "./ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Picture } from "../App/App.types";

interface ImageGalleryProps {
  pictures: Picture[];
  onPictureClick: (link: string) => void;
};

const ImageGallery = ({ pictures, onPictureClick }: ImageGalleryProps) => {
  return (
    <ul className={s.gallery}>
      {pictures.map((picture) => (
        <li key={picture.id}>
          <ImageCard onPictureClick={onPictureClick} picture={picture} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;