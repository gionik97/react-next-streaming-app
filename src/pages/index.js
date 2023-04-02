import { useEffect } from "react";
import { useRouter } from "next/router";
import { useStateContext } from "components/HBOProvider";
import MainLayout from "components/layouts/MainLayout";
import FeaturedMedia from "components/ui/FeaturedMedia/FeaturedMedia";
import AuthCheck from "components/AuthCheck";
import MediaRow from "components/ui/MediaRow/MediaRow";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow
        title="Movies"
        type="large-v"
        endpoint="discover/movie?with_genres=28&primary_release_year=2022"
      />
      <MediaRow
        title="Series"
        type="small-h"
        endpoint="discover/movie?with_genres=28&primary_release_year=2022"
      />
      <MediaRow
        title="Action"
        type="small-v"
        endpoint="discover/movie?with_genres=28&primary_release_year=2022"
      />
      <MediaRow
        title="Horror"
        type="large-v"
        endpoint="discover/movie?with_genres=27&primary_release_year=2022"
      />
      <MediaRow
        title="Sci-fi"
        type="small-v"
        endpoint="discover/movie?with_genres=878&primary_release_year=2022"
      />
    </MainLayout>
  );
}
