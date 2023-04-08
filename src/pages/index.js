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
      <FeaturedMedia />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Series" type="small-h" />}
      >
        <MediaRow
          title="Series"
          type="small-h"
          endpoint="discover/tv?primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Action" type="small-v" />}
      >
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Horror" type="large-v" />}
      >
        <MediaRow
          title="Horror"
          type="large-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholder title="Sci-fi" type="small-v" />}
      >
        <MediaRow
          title="Sci-fi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2022"
        />
      </LazyLoad>
    </MainLayout>
  );
}
