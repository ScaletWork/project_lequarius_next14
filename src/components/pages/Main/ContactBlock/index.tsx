import { FC } from "react";

const ContactBlock: FC = () => {
  return (
    <section className="contact-block">
      <div className="contact-block__wrapper">
        <h2 className="contact-block__title">
          Want a Free Consultation? Let Us Know!
        </h2>
        <div className="contact-block__info">
          <h3>Phone</h3>
          <a href="tel:+48795695970">+48 79 569 59 70</a>
        </div>
        <div className="contact-block__info">
          <h3>Email</h3>
          <a href="mailto:lequarius@lequarius.com">lequarius@lequarius.com</a>
        </div>
        <div className="contact-block__info">
          <h3>head office</h3>
          <p>
            05-870 Błonie
            <br />
            Powstańców 97
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;
