import React from "react";
import { useStateContext } from "components/HBOProvider";

const SearchModal = (props) => {
  const globalState = useStateContext();

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 1; i <= digit; i++) {
      thumbnails.push(React.cloneElement(comp, { key: i }));
    }
    return thumbnails;
  };

  return (
    <div
      className={`search-modal ${
        globalState.searchOpen ? "search-modal--active" : ""
      }`}
    >
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          type="text"
          placeholder="Search for a title"
          value=""
        />
        <div
          className="search-modal__close-btn"
          onClick={() => globalState.setSearchOpen(!globalState.searchOpen)}
        >
          <i className="fas fa-times" />
        </div>
      </div>
      <h3 className="search-modal__title">Popular Searches</h3>
      <div className="search-modal__thumbnails">
        {loopComp(
          <div className="search-modal__thumbnail">
            <img
              src="https://i.ebayimg.com/images/g/tTEAAOSwzRlZgWnw/s-l1600.jpg"
              alt=""
            />
            <div className="search-modal__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default SearchModal;
