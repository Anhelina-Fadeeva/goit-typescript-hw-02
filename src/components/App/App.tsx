import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchData } from "../../services/api";
import { Picture } from "./App.types";

const App: React.FC = () => {
  const [results, setResults] = useState<Picture[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
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

  const handleFetchData = async (): Promise<void> => {
    if (!query) return;

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetchData(query, page);
      setResults((prev) => [...prev, ...response.results]);
      setTotal(response.totalPages);
    } catch (err) {
      setResults([]);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [query, page]);

  const handleSetQuery = (newQuery: string): void => {
    setQuery(newQuery);
    setResults([]);
    setPage(1);
    setError(null);
  };

  return (
    <div style={{ backgroundColor: "#f5f7fa", padding: "20px" }}>
      <SearchBar setQuery={handleSetQuery} />
      {error && <ErrorMessage error={error} />}
      <ImageGallery pictures={results} onPictureClick={onPictureClick} />
      {isLoading && <Loader />}
      {total > page && !isLoading && results.length > 0 && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
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
