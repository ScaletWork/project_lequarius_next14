import VideoBlock from "@/components/pages/Main/VideoBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <div className="main-page">
      <VideoBlock />
    </div>
  );
};

export default Home;
