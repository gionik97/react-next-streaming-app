import { useState, useEffect } from "react";
import axios from "axios";

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.endpoint}&api_key=cc84e59b5bff0efa8dfb2e7f1aabf101&language=en-US`
      )
      .then(function (response) {
        setMovies(response.data.results);
        setLoadingData(false);
        console.log("success response for " + props.title);
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("error response for " + props.title);
        console.log(error);
      });
  }, []);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 1; i <= digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };

  const showThumbnails = () => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          console.log("movie", movie);
          return <Thumbnail movieData={movie} />;
        });
  };

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">{showThumbnails()}</div>
    </div>
  );
};

const Thumbnail = (props) => {
  // console.log("movie", props.movie);
  return (
    <div className="media-row__thumbnail">
      <img
        // src="https://i.ebayimg.com/images/g/tTEAAOSwzRlZgWnw/s-l1600.jpg"
        src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`}
        alt=""
      />
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
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
