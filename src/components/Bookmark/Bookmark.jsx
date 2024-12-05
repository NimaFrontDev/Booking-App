import ReactCountryFlag from "react-country-flag";
import { useBookmark } from "../context/BookmarkListContext";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

function Bookmark() {
  const { isLoading, bookmarks } = useBookmark();

  if (isLoading) return <Loader />;
  return (
    <div>
      bookmark list
      <h2>Bookamrk List</h2>
      <div className="bookmarkList">
        {bookmarks.map((item) => {
          return (
            <Link
              key={item.id}
              to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >
              <div className="bookmarkItem">
                <ReactCountryFlag svg countryCode={item.countryCode} />
                &nbsp; <strong>{item.cityName}</strong> &nbsp;
                <span>{item.country}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Bookmark;
