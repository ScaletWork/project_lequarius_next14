import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const ServiceMain: FC = () => {
  return (
    <section className="service-main">
      <div className="blur-circle blur-circle--4" />
      <div className="blur-circle blur-circle--5" />
      <div className="blur-circle blur-circle--6" />
      <h2>Services We Provide</h2>
      <p>
        Our comprehensive suite of services is designed to bring your digital
        vision to life. We specialize in mobile app development, front-end
        design, and back-end architecture, delivering seamless and
        high-performing solutions. From crafting engaging user interfaces to
        building robust and scalable infrastructures, our team is equipped to
        handle every aspect of your project. Whether you’re a startup or an
        established enterprise, we provide tailored solutions to meet your
        unique needs and drive your success.
      </p>
      <ul className="service-main__services">
        <li>
          <h3>UX/UI Design</h3>
          <a href="#section-1">Learn More</a>
        </li>
        <li>
          <h3>
            Full - stack <br /> mobile and <br /> web <br /> development
          </h3>
          <a href="#section-2">Learn More</a>
        </li>
        <li>
          <h3>
            IT Services <br /> management <br /> and cloud <br /> solutions
          </h3>
          <a href="#section-3">Learn More</a>
        </li>
      </ul>
      <ul className="service-main__details">
        <li id="section-1">
          <div className="service-main__details--img">
            <Image
              src={"/services-main/1.png"}
              width={500}
              height={500}
              alt="Service Detail"
            />
          </div>
          <div className="service-main__details--text">
            <h4>UX/UI Design </h4>
            <div className="service-main__details--wrapper">
              <h3>
                From Idea to
                <br /> User
                <br /> Experience
              </h3>
              <p>
                Our UX/UI design services focus on crafting intuitive, visually
                simple interfaces tailored to your users and customers. By
                blending creativity with functionality, we ensure your digital
                products not only look amazing but also deliver seamless,
                user-centered experiences that elevate your brand and maximize
                customer satisfaction
              </p>
              <Link href={"/services"}>Learn More</Link>
            </div>
          </div>
        </li>
        <li id="section-2">
          <div className="service-main__details--img">
            <Image
              src={"/services-main/2.png"}
              width={500}
              height={500}
              alt="Service Detail"
            />
          </div>
          <div className="service-main__details--text">
            <h4>
              Full stack mobile <br /> and web <br /> development
            </h4>
            <div className="service-main__details--wrapper">
              <h3>
                End-to-End <br /> Solutions
              </h3>
              <p>
                From concept to deployment, we offer comprehensive full-stack
                development services to bring your digital ideas to life.
                Specializing in both mobile and web platforms, we deliver
                scalable, high-performing solutions tailored to your business
                needs. Whether it&apos;s crafting sleek front-end interfaces or
                building robust back-end systems, our expertise ensures seamless
                functionality and exceptional user experiences across all
                devices
              </p>
              <Link href={"/services"}>Learn More</Link>
            </div>
          </div>
        </li>
        <li id="section-3">
          <div className="service-main__details--img">
            <Image
              src={"/services-main/3.png"}
              width={500}
              height={500}
              alt="Service Detail"
            />
          </div>
          <div className="service-main__details--text">
            <h4>
              IT Services <br /> management and <br /> cloud solutions
            </h4>
            <div className="service-main__details--wrapper">
              <h3>
                100% Secured <br /> Data
              </h3>
              <p>
                Empower your business with our cutting-edge IT services
                management, cloud solutions, and robust data security practices.
                We specialize in streamlining IT operations, optimizing
                workflows, and delivering scalable cloud strategies to enhance
                efficiency and reduce costs. With a focus on safeguarding your
                sensitive information, our secure solutions include advanced
                encryption, regular audits, and compliance with industry
                standards.
              </p>
              <Link href={"/services"}>Learn More</Link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ServiceMain;
