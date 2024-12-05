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
                100% Secured <br /> Data
              </h3>
              <p>
                Highlight specific services or products that are unique to your
                business here. It can be your flagship product, or a service
                that you&apos;ve pioneered. Give it room to shine here.
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
            <h4>Full stack mobile and web development</h4>
            <div className="service-main__details--wrapper">
              <h3>
                100% Secured <br /> Data
              </h3>
              <p>
                Highlight specific services or products that are unique to your
                business here. It can be your flagship product, or a service
                that you&apos;ve pioneered. Give it room to shine here.
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
            <h4>IT Services management and cloud solutions</h4>
            <div className="service-main__details--wrapper">
              <h3>
                100% Secured <br /> Data
              </h3>
              <p>
                Highlight specific services or products that are unique to your
                business here. It can be your flagship product, or a service
                that you&apos;ve pioneered. Give it room to shine here.
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
