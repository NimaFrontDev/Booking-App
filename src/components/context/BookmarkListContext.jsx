import axios from "axios";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import useFetch from "../../hooks/useFetch";

const BookmarkContext = createContext();
const BASE_URL = "http://localhost:5000";

function BookmarkListProvider({ children }) {
  const [currentBookamrk, setCurrentBookamrk] = useState(null);
  const [isLoadingCurrBookmark, setIsLoadingCurrBookmark] = useState(false);
  const { isLoading, data: bookmarks } = useFetch(`${BASE_URL}/bookmarks`);

  async function getBookmark(id) {
    try {
      setIsLoadingCurrBookmark(true);
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      setCurrentBookamrk(data);
      setIsLoadingCurrBookmark(false);
    } catch (error) {
      toast.error(error?.message);
      setIsLoadingCurrBookmark(false);
    }
  }

  return (
    <BookmarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        currentBookamrk,
        getBookmark,
        isLoadingCurrBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkListProvider;

export function useBookmark() {
  return useContext(BookmarkContext);
}