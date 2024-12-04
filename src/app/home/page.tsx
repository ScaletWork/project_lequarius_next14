import AboutUsMain from "@/components/pages/Main/AboutUs";
import ServiceMain from "@/components/pages/Main/Service";
import VideoBlock from "@/components/pages/Main/VideoBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <div className="main-page">
      <VideoBlock />
      <AboutUsMain />
      <ServiceMain />
    </div>
  );
};

export default Home;
