"use client";

import Blob from "@/components/shared/Animation/Blob";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { FC } from "react";

const aboutInfo = [
  {
    img: "/choose-us/1.png",
    title: "Customized solutions",
    text: "Each project is customized to meet your specific business needs and goals. From idea inception to deployment and beyond, we provide full-cycle development and maintenance services.",
  },
  {
    img: "/choose-us/2.png",
    title: "24/7 Support",
    text: "We provide round-the-clock support to address any questions or challenges you may face. Whether it’s troubleshooting technical issues, optimizing application performance, or ensuring smooth project progression, our dedicated support team is always available to assist you.",
  },
  {
    img: "/choose-us/3.png",
    title: "Secure Data",
    text: "We prioritize the security of your data with industry-leading measures to safeguard your sensitive information. From advanced encryption protocols to regular security audits, our team ensures your applications and systems are protected against threats.",
  },
  {
    img: "/choose-us/4.png",
    title: "On-Time Delivery",
    text: "Our team is committed to delivering your projects on schedule without compromising quality. With streamlined workflows, proactive communication, and meticulous planning, we ensure your solutions are ready to launch exactly when you need them.",
  },
];

const formatTitleWithBr = (title: string) => {
  return title.split(" ").map((word, index) => (
    <span key={index}>
      {word}
      {index < title.split(" ").length - 1 && <br />}
    </span>
  ));
};

const AboutUsMain: FC = () => {
  return (
    <section className="about-us-main">
      <div className="blur-circle blur-circle--1" />
      <h2>Why choose us?</h2>
      <ul>
        {aboutInfo.map((item, i) => (
          <li key={i}>
            <div className="about-us-main__image">
              <Image
                src={item.img}
                width={290}
                height={240}
                alt="About Us icon"
              />
            </div>
            <h3>{formatTitleWithBr(item.title)}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <div className="about-us-main__wrapper">
        <div className="about-us-main__wrapper--video">
          <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob />
          </Canvas>
        </div>
        <div className="about-us-main__wrapper--text">
          <h3>About</h3>
          <h2>
            LeQuarius <br /> Technology
          </h2>
          <p>
            Cloud solutions? Mobile applications? Full-stack software systems?
            We can do it all! At LeQuarius, we create programs specifically
            tailored to you and your business needs.
          </p>
        </div>
      </div>
      <h4>
        Let us manage the small details while you focus on the big picture!
      </h4>
      <div className="blur-circle blur-circle--2" />
      <div className="blur-circle blur-circle--3" />
    </section>
  );
};

export default AboutUsMain;
