"use client";

import { FC, useEffect, useState } from "react";

const VideoBlock: FC = () => {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    setIsVideo(true);
  }, []);

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
