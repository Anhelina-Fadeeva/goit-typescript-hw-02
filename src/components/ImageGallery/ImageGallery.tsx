import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Picture } from "../App/App.types";

interface ImageGalleryProps {
  pictures: Picture[];
  onPictureClick: (link: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ pictures, onPictureClick }) => {
  return (
    <ul className={s.gallery}>
      {pictures.map((picture) => (
        <li key={picture.id}>
          <ImageCard onPictureClick={onPictureClick} dataImage={picture} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;