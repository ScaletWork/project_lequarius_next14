"use client";
import ContactFormBtn from "@/components/shared/ContactFormBtn";
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
        <h2 className="contact-block__title">
          Want a Free Consultation? Let Us Know!
        </h2>
        <div className="contact-block__info">
          <h3>Phone</h3>
          <div>
            <a href="tel:+48795695970" className="hoverUnderlineAnimation">
              +48 79 569 59 70
            </a>
          </div>
        </div>
        <div className="contact-block__info">
          <h3>Email</h3>
          <div>
            <a
              href="mailto:lequarius@lequarius.com"
              className="hoverUnderlineAnimation"
            >
              lequarius@lequarius.com
            </a>
          </div>
        </div>
        <div className="contact-block__info flex">
          <div className="gap">
            <h3>head office</h3>
            <p>
              05-870 Błonie
              <br />
              Powstańców 97
            </p>
          </div>
          <ContactFormBtn />
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
