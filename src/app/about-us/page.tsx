import InfoBlock from "@/components/shared/InfoBlock";
import Title from "@/components/shared/Title";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutUs = () => {
  const aboutInfo = [
    {
      title: "Who We Are",
      text: "We are a dynamic and experienced IT company driven by a passion for technology and innovation. Our team of skilled professionals combines creativity, technical proficiency, and a customer-centric approach to deliver high-quality solutions tailored to meet the unique needs of each client. Whether you're a startup or an established enterprise, we strive to build long-term partnerships that empower you and your business.",
      img: "/icons/1.png",
    },
    {
      title: "Our Mission",
      text: "Our mission is to deliver high-quality technology solutions that improve efficiency, elevate user experiences, and foster business growth. We are committed to innovation, reliability, and client satisfaction, ensuring every project we undertake creates lasting value and strengthens our clients' competitive edge in the digital world.",
      img: "/icons/2.png",
    },
    {
      title: "Our Vision",
      text: "We strive to be a leading IT solutions provider, empowering businesses worldwide with innovative, secure, and scalable technologies. Our goal is to create a future where digital transformation drives success, and every business has access to cutting-edge tools that enable growth and innovation.",
      img: "/icons/3.png",
    },
  ];

  const aboutInfo2 = [
    {
      title: "Our Values",
      text: "Our core values are innovation, collaboration, integrity, continuous learning, and quality. At Lequariua, we focus on delivering creative solutions, maintaining transparency, and working closely with clients to meet their needs. These values shape our approach, ensuring that every project we take on aligns with our commitment to excel and drive success.",
      img: "/icons/4.png",
    },
    {
      title: "Our team",
      text: "At Lequariua, we are proud to have a diverse and talented team of experienced professionals. Our team includes skilled software developers, project managers, user experience experts, and graphic designers, all with extensive experience working on a wide range of projects.  Through collaboration and dedication, we work together to bring your ideas to life and drive impactful results.",
      img: "/icons/5.png",
    },
    {
      title: "Our Partners",
      text: " We are fortunate to collaborate with a diverse range of partners across various industries. From technology and healthcare to finance and e-commerce, our partners share our commitment to innovation and excellence. By working together, we leverage our collective expertise to deliver high-quality solutions that meet the unique challenges of each sector.",
      img: "/icons/6.png",
    },
  ];

  return (
    <section className="about-us-page">
      <div className="blur-circle blur-circle--8" />
      <div className="blur-circle blur-circle--9" />
      <div className="blur-circle blur-circle--10" />
      <Image src="/spiral-pink.png" alt="About Us" width={837} height={1824} />
      <Title
        title="about us"
        text="At LeQuarius, we specialize in delivering innovative IT solutions,
        including mobile app development, web design, and cloud services, to
        empower businesses worldwide."
      />
      <ul className="about-us-page__list about-us-page__list--first">
        {aboutInfo.map((item, i) => (
          <li key={i}>
            <InfoBlock {...item} />
          </li>
        ))}
      </ul>
      <ul className="about-us-page__list">
        {aboutInfo2.map((item, i) => (
          <li key={i}>
            <InfoBlock {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutUs;
