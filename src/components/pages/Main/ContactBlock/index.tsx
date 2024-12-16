"use client";
import ContactFormBtn from "@/components/shared/ContactFormBtn";
import { scrollAnimation } from "@/utils/constant";
import { motion } from "motion/react";
import { FC, useEffect, useState } from "react";

const ContactBlock: FC = () => {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    setIsVideo(true);
  }, []);

  return (
    <div className="contact-block">
      {isVideo && (
        <video autoPlay loop muted playsInline preload="metadata">
          <source src="/contact_bg.mp4" type="video/mp4" />
        </video>
      )}
      <div className="contact-block__wrapper">
        <motion.h2 {...scrollAnimation} className="contact-block__title">
          Want a Free Consultation? Let Us Know!
        </motion.h2>
        <div className="contact-block__info">
          <motion.h3 {...scrollAnimation}>Phone</motion.h3>
          <motion.div {...scrollAnimation}>
            <a href="tel:+48795695970" className="hoverUnderlineAnimation">
              +48 79 569 59 70
            </a>
          </motion.div>
        </div>
        <div className="contact-block__info">
          <motion.h3 {...scrollAnimation}>Email</motion.h3>
          <motion.div {...scrollAnimation}>
            <a
              href="mailto:lequarius@lequarius.com"
              className="hoverUnderlineAnimation"
            >
              lequarius@lequarius.com
            </a>
          </motion.div>
        </div>
        <div className="contact-block__info flex">
          <div className="gap">
            <motion.h3 {...scrollAnimation}>head office</motion.h3>
            <motion.p {...scrollAnimation}>
              05-870 Błonie
              <br />
              Powstańców 97
            </motion.p>
          </div>
          <ContactFormBtn />
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
