import Head from "next/head";
import Image from "next/image";
import App from "./_app";
import { Inter } from "@next/font/google";
import MainLayout from "components/layouts/MainLayout";
import FeaturedMedia from "components/ui/FeaturedMedia/FeaturedMedia";
import MediaRow from "components/ui/MediaRow/MediaRow";
import CastInfo from "components/ui/CastInfo/CastInfo";

const inter = Inter({ subsets: ["latin"] });

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="More Like This" type="small-v" />
      <CastInfo />
    </MainLayout>
  );
}
