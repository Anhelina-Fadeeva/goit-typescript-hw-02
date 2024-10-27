import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Picture } from "../App/App.types";

interface SearchBarProps {
  setQuery: (value: string) => void;
  setResults: (value: Picture[] | ((prev: Picture[]) => Picture[])) => void;
}

interface Values {
  query: string;
}

const SearchBar = ({ setQuery, setResults }: SearchBarProps) => {
  const notify = () => toast("I'm not a psychic you know...");

  const initialValues = {
    query: "",
  };

  const handleSubmit = (values: Values, actions: any): void => {
    if (values.query) {
      setQuery(values.query);
      actions.resetForm();
    } else {
      notify();
      setResults([]);
    }
  };

  return (
    <header className={s.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.btn} type="submit">
            Search
          </button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;