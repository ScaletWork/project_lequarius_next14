"use client";

import InfoBlock from "@/components/shared/InfoBlock";
import Title from "@/components/shared/Title";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { scrollAnimation } from "@/utils/constant";

const CareersComponent: FC = () => {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    setIsVideo(true);
  }, []);

  const infoBlocks = [
    {
      title: "fair and stable wage",
      text: "We offer competitive salaries and job stability, ensuring financial security for our employees.",
      img: "/icons/11.png",
    },
    {
      title: "Professional Development",
      text: "Opportunities for learning, skill enhancement, and career advancement within the company.",
      img: "/icons/12.png",
    },
    {
      title: "Friendly work environment",
      text: "Our company fosters a welcoming and supportive work environment where teamwork and collaboration thrive. ",
      img: "/icons/13.png",
    },
  ];

  return (
    <section className="careers">
      <Image src="/spiral-red.png" alt="Careers" width={837} height={1824} />
      <div className="careers__main">
        <Title
          title="CAREERS"
          text="At LeQuarius we value innovation, collaboration, and delivering exceptional IT solutions. Join a team where your ideas matter and your growth is supported."
        />
        <motion.p {...scrollAnimation}>Why LeQuarius?</motion.p>
        <ul className="careers__main--list">
          {infoBlocks.map((item, i) => (
            <li key={i}>
              <InfoBlock {...item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="careers__contact">
        <motion.h4 {...scrollAnimation}>
          Take the next step in your career—join Lequariua! Explore our job
          openings and apply today. Have questions? Reach out to our HR team at
          lequarius@lequarius.com{" "}
        </motion.h4>
        <div className="careers__contact--text">
          <motion.p {...scrollAnimation}>
            At Lequarius, we are constantly on the lookout for fresh talent and
            driven individuals to join our growing team. If you&apos;re
            passionate about innovation and eager to make an impact, we’d love
            to hear from you—email your CV and cover letter to
            lequarius@lequarius.com to explore opportunities with us!
          </motion.p>
          <motion.img
            {...scrollAnimation}
            src="/icons/14.png"
            alt="Icon"
            width={120}
            height={120}
          />
        </div>
        <div className="careers__contact--video">
          {isVideo && (
            <video
              src="/careers_video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CareersComponent;
