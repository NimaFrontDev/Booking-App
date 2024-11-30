import Map from "../Map/Map";

function Bookmarks() {
  return (
    <div className="appLayout">
      <div className="sidebar">
        <div>bookmark list</div>
      </div>
      <Map markerLocations={[]} />
    </div>
  );
}

export default Bookmarks;