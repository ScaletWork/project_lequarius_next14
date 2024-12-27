import AboutUsMain from "@/components/pages/Main/AboutUs";
import ServiceMain from "@/components/pages/Main/Service";
import VideoBlock from "@/components/pages/Main/VideoBlock";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <div className="main-page">
      <Image
        src="/logo.png"
        alt="background"
        width={3676}
        height={2957}
        style={{ display: "none" }}
      />
      <VideoBlock />
      <AboutUsMain />
      <ServiceMain />
    </div>
  );
};

export default Home;
