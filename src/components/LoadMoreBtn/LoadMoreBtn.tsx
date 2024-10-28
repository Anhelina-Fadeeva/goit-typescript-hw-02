import s from "./LoadMoreBtn.module.css"; // Импортируем стили

interface LoadMoreBtnProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Определяем интерфейс для пропсов
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => { // Объявляем функциональный компонент
  return (
    <div className={s.wrapper}> {/* Обёртка для кнопки */}
      <button
        className={s.btn} // Применяем стили для кнопки
        onClick={onClick} // Обработчик клика получаемый через пропс
      >
        Load more {/* Текст на кнопке */}
      </button>
    </div>
  );
};

export default LoadMoreBtn;