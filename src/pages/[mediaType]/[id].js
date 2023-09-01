import { useEffect, useState } from "react";
import CastInfo from "components/ui/CastInfo/CastInfo";
import MediaRow from "components/ui/MediaRow/MediaRow";
import FeaturedMedia from "components/ui/FeaturedMedia/FeaturedMedia";
import MainLayout from "components/layouts/MainLayout";
import Placeholder from "components/ui/Placeholder/Placeholder";
import { useRouter } from "next/router";
import axios from "axios";
import LazyLoad from "parm-react-lazyload";

export default function SingleMediaPage(props) {
  const router = useRouter();
  // const [mediaData, setMediaData] = useState(false);
  // console.log("props.params.mediaType", props.params.mediaType);
  // console.log(props);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${props.params.id}?api_key=cc84e59b5bff0efa8dfb2e7f1aabf101&language=en-US`
  //     )
  //     .then(function (response) {
  //       setMediaData(response.data);
  //       console.log("response", response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [mediaData]);
  // console.log("props.params", props.mediaData);
  // console.log("props.params.mediaType", props.params.mediaType);
  return (
    <MainLayout>
      <FeaturedMedia
        title={
          props.params.mediaType === "movie"
            ? props.mediaData.title
            : props.mediaData.name
        }
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.mediaData.backdrop_path}`}
        location=""
        linkUrl="/movies/id"
        type="single"
        mediaType={props.params.mediaType}
        mediaId={props.params.id}
      />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Similar to this" type="small-v" />}
      >
        <MediaRow
          title="Similar to this"
          type="small-v"
          mediaType={props.params.mediaType}
          mediaID={props.params.id}
          endpoint={`${props.params.mediaType === "movie" ? "movie" : "tv"}/${
            props.params.id
          }/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaID={props.params.id} mediaType={props.params.mediaType} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let mediaData;

  try {
    mediaData = await axios.get(
      `https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=cc84e59b5bff0efa8dfb2e7f1aabf101&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }

  return {
    props: { mediaData: mediaData.data, params: context.query }, // will be passed to the page component as props
  };
}
