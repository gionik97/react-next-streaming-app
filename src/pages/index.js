import { useEffect } from "react";
import { useRouter } from "next/router";
import LazyLoad from "parm-react-lazyload";
import { useStateContext } from "components/HBOProvider";
import MainLayout from "components/layouts/MainLayout";
import FeaturedMedia from "components/ui/FeaturedMedia/FeaturedMedia";
import AuthCheck from "components/AuthCheck";
import MediaRow from "components/ui/MediaRow/MediaRow";
import Placeholder from "components/ui/Placeholder/Placeholder";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?mute=1&autoplay=1&loop=1&start=16"
        title="Mortal Kombat"
        location="In theaters and on HBO MAX. Streaming throughout May 23."
        linkUrl="/movie/460465"
        type="front"
      />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Series" type="small-h" />}
      >
        <MediaRow
          title="Series"
          type="small-h"
          mediaType="tv"
          endpoint="discover/tv?sort_by=popularity.desc&language=en-US&primary_release_year=2020"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Action" type="small-v" />}
      >
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Horror" type="large-v" />}
      >
        <MediaRow
          title="Horror"
          type="large-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Sci-fi" type="small-v" />}
      >
        <MediaRow
          title="Sci-fi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}
