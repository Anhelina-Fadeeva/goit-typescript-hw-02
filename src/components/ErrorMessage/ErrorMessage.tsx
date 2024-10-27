import s from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: boolean;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    error && (
      <div>
        <h1>Something went wrong...</h1>
      </div>
    )
  );
};

export default ErrorMessage;