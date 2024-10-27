import React from 'react';
import s from './ImageCard.module.css';
import { Picture } from '../App/App.types';

interface ImageCardProps {
  dataImage: Picture; // Используем тип Picture
  onPictureClick: (link: string) => void; // Заменили openModal на onPictureClick
}

const ImageCard: React.FC<ImageCardProps> = ({ dataImage, onPictureClick }) => {
  const { urls, alt_description } = dataImage; // Изменил `description` на `alt_description`

  return (
    <div>
      <div>
        <img
          className={s.imageGallery}
          onClick={() => onPictureClick(urls.regular)} // Теперь используем onPictureClick
          src={urls.small}
          alt={alt_description || 'Image'}
        />
      </div>
    </div>
  );
};

export default ImageCard;