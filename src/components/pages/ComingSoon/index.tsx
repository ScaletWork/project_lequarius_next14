"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const ComingSoon: FC = () => {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    setIsVideo(true);
  }, []);

  return (
    <section className="coming-soon">
      <div className="coming-soon__video">
        {isVideo && (
          <video autoPlay loop muted playsInline preload="metadata">
            <source src="/comming-soon.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="coming-soon__logo"
      >
        <Image src="/logo.png" alt="coming soon" width={180} height={180} />
        <span>Lequarius</span>
      </motion.div>
      <div className="coming-soon__text">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Website is Coming Soon!
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Come back later for the big reveal! In the meantime, please reach us
          at: lequarius@lequarius.com
        </motion.h2>
      </div>
    </section>
  );
};

export default ComingSoon;
