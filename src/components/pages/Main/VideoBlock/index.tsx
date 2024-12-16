"use client";

import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

const VideoBlock: FC = () => {
  const [isVideo, setIsVideo] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVideo(true);
    if (pathname === "/home") {
      document.body.classList.add("another-color");
    }

    return () => {
      document.body.classList.remove("another-color");
    };
  }, [pathname]);

  return (
    <section className="video-block">
      <h1>LeQuarius</h1>
      {isVideo && (
        <video
          className="video-block__video"
          src="/main_bg.MOV"
          autoPlay
          muted
          playsInline
          preload="metadata"
        />
      )}
    </section>
  );
};

export default VideoBlock;
