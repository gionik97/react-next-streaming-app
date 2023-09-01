import React from "react";
import { useStateContext } from "components/HBOProvider";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const SearchModal = (props) => {
  const globalState = useStateContext();
  const [popularData, setPopularData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");

  const router = useRouter();

  useEffect(() => {
    try {
      let getPopData = async () =>
        await axios
          .get(
            `https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=cc84e59b5bff0efa8dfb2e7f1aabf101&language=en-US`
          )
          .then(({ data }) => {
            console.log("popdata", data.results);
            setPopularData(data.results.filter((item, i) => i < 14));
          });
      getPopData();
      setShowResults(false);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.searchOpen]);

  const handleInput = async (e) => {
    try {
      setText(e.target.value);

      let inputSearchData = async () =>
        await axios
          .get(
            `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=cc84e59b5bff0efa8dfb2e7f1aabf101&language=en-US`
          )
          .then(({ data }) => {
            console.log("popdata", data.results);
            setSearchData(
              data.results.filter(
                (item, i) =>
                  item.media_type === "tv" || item.media_type === "movie"
              )
            );
          });
      inputSearchData();
      setShowResults(true);
    } catch (error) {
      console.log(error);
    }
  };

  const clickedThumbnail = (type, id, media_type) => {
    if (type === "popular") {
      router.push(`/movie/${id}`);
      globalState.setSearchOpen(!globalState.searchOpen);
    }

    if (type === "search") {
      router.push(`/${media_type}/${id}`);
      globalState.setSearchOpen(!globalState.searchOpen);
    }

    console.log("send user to media page" + props.mediaUrl);
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
          onChange={handleInput}
          value={text}
        />
        <div
          className="search-modal__close-btn"
          onClick={() => globalState.setSearchOpen(!globalState.searchOpen)}
        >
          <i className="fas fa-times" />
        </div>
      </div>
      <h3 className="search-modal__title">
        {showResults && searchData.length >= 1
          ? `Search Results for: ${text}`
          : "Popular Searches"}
      </h3>
      <div className="search-modal__thumbnails">
        {showResults && searchData.length >= 1 ? (
          <SearchResults
            searchData={searchData}
            clickedThumbnail={clickedThumbnail}
          />
        ) : (
          <PopularResults
            popularData={popularData}
            clickedThumbnail={clickedThumbnail}
          />
        )}
      </div>
    </div>
  );
};

const PopularResults = (props) => {
  return props.popularData.map((item, index) => {
    return (
      <div
        className="search-modal__thumbnail"
        key={index}
        onClick={() => props.clickedThumbnail("popular", item.id)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
          alt=""
        />
        <div className="search-modal__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  });
};

const SearchResults = (props) => {
  return props.searchData.map((item, index) => {
    return (
      <div
        className="search-modal__thumbnail"
        key={index}
        onClick={() =>
          props.clickedThumbnail("search", item.id, item.media_type)
        }
      >
        <img
          src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
          alt=""
        />
        <div className="search-modal__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  });
};

export default SearchModal;
