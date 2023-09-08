import { useState, useEffect } from "react";
import axios from "axios";

const CastInfo = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${
          props.mediaType === "movie" ? "movie" : "tv"
        }/${
          props.mediaID
        }/credits?api_key=cc84e59b5bff0efa8dfb2e7f1aabf101&language=en-US`
      )
      .then(function (response) {
        setCredits(response.data);
        setLoadingData(false);
      })
      .catch(function (error) {
        console.log("error response for cast and crew");
        console.log(error);
      });
  }, [credits]);

  const showCast = () => {
    if (loadingData !== true) {
      return credits.cast.slice(0, 5).map((item, index) => {
        return (
          <ul className="cast-info__crew" key={index}>
            <li>{item.character}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Cast...</div>;
    }
  };

  const showCrew = () => {
    if (loadingData !== true) {
      return credits.crew.slice(0, 5).map((item, index) => {
        return (
          <ul className="cast-info__crew" key={index}>
            <li>{item.job}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Crew...</div>;
    }
  };

  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast</div>
      <div className="cast-info__list">{showCast()}</div>
      <div className="cast-info__group-title">Crew</div>
      <div className="cast-info__list">{showCrew()}</div>
    </div>
  );
};

export default CastInfo;
