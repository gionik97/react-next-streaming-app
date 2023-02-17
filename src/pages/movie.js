import Head from "next/head";
import Image from "next/image";
import App from "./_app";
import { Inter } from "@next/font/google";
import MainLayout from "components/layouts/MainLayout";
import FeaturedMedia from "components/ui/FeaturedMedia/FeaturedMedia";
import PosterView from "components/ui/PosterView/PosterView";
import CastInfo from "components/ui/CastInfo/CastInfo";

const inter = Inter({ subsets: ["latin"] });

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <PosterView />
      <CastInfo />
    </MainLayout>
  );
}
