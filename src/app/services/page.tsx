import InfoBlock from "@/components/shared/InfoBlock";
import Title from "@/components/shared/Title";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
};

const Services = () => {
  const aboutInfo = [
    {
      title: "UX/UI Design",
      text: "Create intuitive and visually appealing interfaces that enhance user satisfaction and align with your brand identity. Our team focuses on delivering designs that are both functional and engaging",
      img: "/icons/7.png",
    },
    {
      title: "mobile and web development",
      text: "Build scalable, responsive, and feature-rich web and mobile applications designed to engage users and meet your business goals. We specialize in full-stack development for seamless performance",
      img: "/icons/8.png",
    },
    {
      title: "cloud solutions",
      text: "Leverage the power of the cloud with secure, scalable, and cost-effective solutions. Whether it's cloud migration, storage, or infrastructure management, we've got you covered",
      img: "/icons/9.png",
    },
    {
      title: "IT server management",
      text: "Optimize your IT operations with our comprehensive management solutions. We streamline processes, improve efficiency, and provide robust support to keep your systems running smoothly.",
      img: "/icons/10.png",
    },
  ];

  return (
    <section className="services">
      <Image src="/spiral-green.png" alt="About Us" width={811} height={1824} />
      <Title
        title="services"
        text="we offer a wide range of IT services, From custom development to cloud solutions, our team of experienced software developers, project managers, and user experience experts is dedicated to delivering IT solutions tailored to meet your business needs "
      />
      <p>Some of our services include</p>
      <ul className="services__list">
        {aboutInfo.map((item, i) => (
          <li key={i}>
            <InfoBlock {...item} />
          </li>
        ))}
      </ul>
      <div className="services__about">
        <h2>Let us manage the details while you focus on the big picture!</h2>
        <h3>Why choose us?</h3>
        <ul className="services__icons">
          <li>
            <Image
              src="/choose-us/1.png"
              width={120}
              height={120}
              alt="Services icon"
            />
            <h4>Customized solutions</h4>
          </li>
          <li>
            <Image
              src="/choose-us/2.png"
              width={120}
              height={120}
              alt="Services icon"
            />
            <h4>24/7 Support</h4>
          </li>
          <li>
            <Image
              src="/choose-us/3.png"
              width={120}
              height={120}
              alt="Services icon"
            />
            <h4>Secure Data</h4>
          </li>
          <li>
            <Image
              src="/choose-us/4.png"
              width={120}
              height={120}
              alt="Services icon"
            />
            <h4>On-Time Delivery</h4>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
