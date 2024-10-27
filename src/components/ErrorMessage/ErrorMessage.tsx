import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: string | null;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    error && (
      <div className={s.error}>
        <h1>Something went wrong...</h1>
        <p>{error}</p>
      </div>
    )
  );
};

export default ErrorMessage;