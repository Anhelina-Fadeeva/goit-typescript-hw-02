import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";

interface LoaderProps {
  isLoading: boolean; // Определение обязательного пропса isLoading
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => { // Указываем тип компонента
  return (
    <div className={s.wrapper}>
      <div className={s.loader}>
        {isLoading && ( // Отображаем анимацию загрузки только, если isLoading истинно
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        )}
      </div>
    </div>
  );
};

export default Loader;