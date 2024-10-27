import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  setPage: (value: number | ((prev: number) => number)) => void;
}

const LoadMoreBtn = ({ setPage }: LoadMoreBtnProps) => {
  return (
    <div className={s.wrapper}>
      <button className={s.btn} onClick={() => setPage((prev: number) => prev + 1)}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;