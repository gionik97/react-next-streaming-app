import Head from "next/head";
import Image from "next/image";
import App from "./_app";
import { Inter } from "@next/font/google";
import MainLayout from "components/layouts/MainLayout";
import FeaturedMedia from "components/ui/FeaturedMedia/FeaturedMedia";
import ForYouList from "components/ui/ForYouList/ForYouList";
import JustAdded from "components/ui/JustAdded/JustAdded";
import PosterView from "components/ui/PosterView/PosterView";

const inter = Inter({ subsets: ["latin"] });

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </MainLayout>
  );
}
