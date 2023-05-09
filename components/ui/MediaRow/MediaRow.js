import React, { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "components/utilities";
import Link from "next/link";

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.endpoint}&api_key=cc84e59b5bff0efa8dfb2e7f1aabf101&language=en-US`
      )
      .then(function (response) {
        setMovies(shuffleArray(response.data.results));
        setLoadingData(false);
        // console.log("success response for " + props.title);
        // console.log("response", response);
      })
      .catch(function (error) {
        console.log("error response for " + props.title);
        console.log(error);
      });
  }, [props.mediaID]);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 1; i <= digit; i++) {
      thumbnails.push(React.cloneElement(comp, { key: i }));
    }
    // console.log("thumb", thumbnails);
    return thumbnails;
  };

  const showThumbnails = (type) => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return (
            <Thumbnail
              key={movie.id}
              movieData={movie}
              type={type}
              mediaType={props.mediaType}
            />
          );
        });
  };

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">{showThumbnails(props.type)}</div>
    </div>
  );
};

const Thumbnail = (props) => {
  const thumbSize = (type) => {
    if (props.type == "large-v") {
      return "400";
    }
    if (type == "small-v") {
      return "342";
    }
    if (type == "large-h") {
      return "780";
    }
    if (type == "small-h") {
      return "500";
    }
  };
  return (
    <Link
      href={`/${props.mediaType == "tv" ? "tv" : "movie"}/${
        props.movieData.id
      }`}
    >
      <div className="media-row__thumbnail">
        <img
          src={`https://image.tmdb.org/t/p/w${thumbSize(props.type)}/${
            props.movieData.poster_path
          }`}
          alt=""
        />
        <div className="media-row__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    </Link>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};

export default MediaRow;
