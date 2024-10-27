import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchData } from "../../services/api";
import { Picture } from "./App.types";

const App = () => {
  const [results, setResults] = useState<Picture[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedPicture, setSelectedPicture] = useState<string | null>(null);

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const onPictureClick = (link: string): void => {
    setSelectedPicture(link);
    setModalIsOpen(true);
  };

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setError(false);
        setIsLoading(true);
        const response = await fetchData(query, page);
        setResults((prev) => [...prev, ...response.results]);
        setTotal(response.totalPages);
      } catch (error) {
        setResults([]);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (query: string): void => {
    setQuery(query);
    setResults([]);
    setPage(1);
    setError(false);
  };

  return (
    <div>
      <SearchBar setQuery={handleSetQuery} setResults={setResults} />
      <ErrorMessage error={error} />
      <ImageGallery onPictureClick={onPictureClick} pictures={results} />
      <Loader isLoading={isLoading} />
      {total > page && !isLoading && results.length > 0 && (
        <LoadMoreBtn setPage={setPage} />
      )}
      {modalIsOpen && selectedPicture && (
        <ImageModal
          selectedPicture={selectedPicture}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;