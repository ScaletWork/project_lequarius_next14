import MailIconSvg from "@/assets/svg/MailIcon";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { FC, useState } from "react";

const ContactFormBtn: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(true);
  };

  return (
    <div className="contact-form-btn">
      <div className="contact-form-btn__wrapper" onClick={toggleForm}>
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
              width: 515,
              height: "auto",
              opacity: 1,
              borderRadius: "40px",
              bottom: "0%",
              left: "-34%",
              translateX: "50%",
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
    </div>
  );
};

export default ContactFormBtn;
