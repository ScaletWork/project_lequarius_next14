"use client";

import { scrollAnimation } from "@/utils/constant";
import { motion } from "motion/react";
import { FC } from "react";

interface ITitle {
  title: string;
  text: string;
}

const Title: FC<ITitle> = ({ title, text }) => {
  return (
    <div className="title">
      <motion.h1 {...scrollAnimation}>{title}</motion.h1>
      <motion.p {...scrollAnimation}>{text}</motion.p>
    </div>
  );
};

export default Title;
