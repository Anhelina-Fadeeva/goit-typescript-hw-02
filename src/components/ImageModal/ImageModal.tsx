import s from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

interface ImageModalProps {
  selectedPicture: string;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const ImageModal = ({
  selectedPicture,
  modalIsOpen,
  closeModal,
}: ImageModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={selectedPicture} className={s.image} alt="Modal" />
    </Modal>
  );
};

export default ImageModal;