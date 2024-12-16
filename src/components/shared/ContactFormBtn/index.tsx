import CloseIconSvg from "@/assets/svg/CloseIcon";
import MailIconSvg from "@/assets/svg/MailIcon";
import { scrollAnimation } from "@/utils/constant";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const ContactFormBtn: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formWidth, setFormWidth] = useState<number | string>(515);
  const [formLeft, setFormLeft] = useState("-34%");
  const [formTransform, setFormTransform] = useState("50%");
  const [isContentVisible, setIsContentVisible] = useState(false);

  const updateFormWidth = () => {
    if (window.innerWidth < 768) {
      setFormLeft("0");
      setFormWidth("100%");
      setFormTransform("initial");
    } else if (window.innerWidth < 1186) {
      setFormWidth(400);
      setFormLeft("-85%");
    } else {
      setFormLeft("-34%");
      setFormWidth(515);
      setFormTransform("50%");
    }
  };

  useEffect(() => {
    updateFormWidth();
    window.addEventListener("resize", updateFormWidth);
    return () => window.removeEventListener("resize", updateFormWidth);
  }, []);

  const closeForm = () => {
    setIsContentVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const openForm = () => {
    setIsContentVisible(true);
    setIsOpen(true);
  };

  return (
    <motion.div {...scrollAnimation} className="contact-form-btn">
      <div className="contact-form-btn__wrapper" onClick={openForm}>
        <div className="contact-form-btn__circle">
          <MailIconSvg />
        </div>
        <div className="contact-form-btn__btn">Contact Us</div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="contact-form-btn__form"
            initial={{
              width: 0,
              height: 0,
              opacity: 0,
              borderRadius: "50%",
              bottom: "0%",
              left: "0%",
              translateX: "0%",
            }}
            animate={{
              width: formWidth,
              height: "auto",
              opacity: 1,
              borderRadius: "40px",
              bottom: "0%",
              left: formLeft,
              translateX: formTransform,
            }}
            exit={{
              width: 0,
              height: 0,
              opacity: 0,
              borderRadius: "50%",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <AnimatePresence>
              {isContentVisible && (
                <motion.div
                  key="form-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    Contact <span>Us</span>
                  </motion.h3>
                  <Image
                    src="/stars.png"
                    alt="Stars"
                    width={20}
                    height={20}
                    className="contact-form-btn__stars"
                  />
                  <button className="close-form" onClick={closeForm}>
                    <CloseIconSvg />
                  </button>
                  <form>
                    <motion.div
                      className="form-group"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                    >
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" required />
                    </motion.div>

                    <div className="form-input-wrapper">
                      <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: 1.0 }}
                      >
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                      </motion.div>

                      <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                      >
                        <label htmlFor="tel">Phone Number</label>
                        <input type="tel" id="tel" required />
                      </motion.div>
                    </div>

                    <motion.div
                      className="form-group"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                    >
                      <label htmlFor="message">Message</label>
                      <textarea id="message" rows={6}></textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="submit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: 1.3 }}
                    >
                      Send
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactFormBtn;
