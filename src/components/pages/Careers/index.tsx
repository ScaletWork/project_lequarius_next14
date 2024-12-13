"use client";

import InfoBlock from "@/components/shared/InfoBlock";
import Title from "@/components/shared/Title";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import ContactFormBtn from "@/components/shared/ContactFormBtn";

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
      <Image src="/spiral-red.png" alt="Careers" width={875} height={1855} />
      <div className="careers__main">
        <Title
          title="CAREERS"
          text="At LeQuarius we value innovation, collaboration, and delivering exceptional IT solutions. Join a team where your ideas matter and your growth is supported."
        />
        <p>Why LeQuarius?</p>
        <ul className="careers__main--list">
          {infoBlocks.map((item, i) => (
            <li key={i}>
              <InfoBlock {...item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="careers__contact">
        <h4>
          Take the next step in your career—join Lequariua! Explore our job
          openings and apply today. Have questions? Reach out to our HR team at
          lequarius@lequarius.com{" "}
        </h4>
        <div className="careers__contact--text">
          <p>
            At Lequarius, we are constantly on the lookout for fresh talent and
            driven individuals to join our growing team. If you're passionate
            about innovation and eager to make an impact, we’d love to hear from
            you—email your CV and cover letter to lequarius@lequarius.com to
            explore opportunities with us!
          </p>
          <Image src="/icons/14.png" alt="Icon" width={120} height={120} />
        </div>
        {/* <ContactFormBtn /> */}
        {/* {isVideo && (
          <video
            src="/comming-soon.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
        )} */}
      </div>
    </section>
  );
};

export default CareersComponent;
