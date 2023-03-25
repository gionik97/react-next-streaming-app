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
      <MediaRow title="Movies" type="large-v" />
      <MediaRow title="Series" type="small-h" />
      <MediaRow title="Action" type="small-v" />
      <MediaRow title="Horror" type="large-v" />
      <MediaRow title="Sci-fi" type="small-v" />
    </MainLayout>
  );
}
