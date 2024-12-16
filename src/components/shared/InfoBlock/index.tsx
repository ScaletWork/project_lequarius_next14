"use client";

import { FC } from "react";
import { motion } from "motion/react";
import { scrollAnimation } from "@/utils/constant";

interface IInfoBlock {
  title: string;
  text: string;
  img: string;
}

const InfoBlock: FC<IInfoBlock> = ({ title, text, img }) => {
  return (
    <div className="info-block">
      <div className="info-block__header">
        <motion.h4 {...scrollAnimation}>{title}</motion.h4>
        <motion.img
          {...scrollAnimation}
          src={img}
          alt={title}
          width={75}
          height={75}
        />
      </div>
      <motion.p {...scrollAnimation}>{text}</motion.p>
    </div>
  );
};

export default InfoBlock;
