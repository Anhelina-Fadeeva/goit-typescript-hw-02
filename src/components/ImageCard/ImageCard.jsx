import s from './ImageCard.module.css';

const ImageCard = ({ dataImage, openModal }) => {
  const { urls, description } = dataImage;

  return (
    <li>
      <div>
        <img
          className={s.imageGallery}
          onClick={() => openModal({ url: urls.full, name: description })}
          src={urls.small}
          alt={description || 'Image'}
        />
      </div>
    </li>
  );
};

export default ImageCard;