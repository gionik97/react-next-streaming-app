import { useEffect } from "react";
import { useRouter } from "next/router";
import LazyLoad from "parm-react-lazyload";
import { useStateContext } from "components/HBOProvider";
import MainLayout from "components/layouts/MainLayout";
import FeaturedMedia from "components/ui/FeaturedMedia/FeaturedMedia";
import AuthCheck from "components/AuthCheck";
import MediaRow from "components/ui/MediaRow/MediaRow";
import Placeholder from "components/ui/Placeholder/Placeholder";
import GenreNav from "components/ui/GenreNav/GenreNav";
import { shuffleArray } from "components/utilities";
import axios from "axios";

export default function MediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter();

  const showRandomMedia = () => {
    let thumbType;
    return props.genresData.map((item, index) => {
      thumbType = shuffleArray(globalState.thumbTypes)[0];
      return (
        <LazyLoad
          offset={-200}
          placeholder={<Placeholder title={item.name} type={thumbType} />}
          key={item.id}
        >
          <MediaRow
            mediaID={props.query.genre_id}
            title={item.name}
            type={thumbType}
            mediaType={props.query.mediaType}
            endpoint={`discover/${props.query.mediaType}?with_genres=${
              props.query.genre_id
            }&sort_by=popularity.desc&primary_release_year=2021&page=${
              index + 1
            }`}
          />
        </LazyLoad>
      );
    });
  };

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
        title={
          props.query.mediaType === "movie"
            ? props.featuredData.title
            : props.featuredData.name
        }
        linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
        type="single"
        mediaType={props.query.mediaType}
        mediaId={props.featuredData.id}
      />
      <GenreNav
        mediaType={props.query.mediaType}
        genresData={props.genresData}
      />
      {showRandomMedia()}
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;

  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=cc84e59b5bff0efa8dfb2e7f1aabf101&language=en-US`
    );
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2023&with_genres=${context.query.genre_id}&api_key=cc84e59b5bff0efa8dfb2e7f1aabf101&language=en-US`
    );
    console.log("genresData DATA: ", genresData.data);
    console.log("featuredData DATA: ", featuredData.data);
  } catch (error) {
    console.log("error", error);
  }
  console.log("genresData", genresData);
  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query,
    },
  };
}
