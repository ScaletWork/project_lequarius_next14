"use client";

import { scrollAnimation } from "@/utils/constant";
import { motion } from "motion/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const menuItems = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];
const Header: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 0) {
          setShowHeader(true); // Показывать хедер при самом верху страницы
        } else if (currentScrollY > lastScrollY) {
          setShowHeader(false); // Скрывать хедер при скролле вниз
        } else {
          setShowHeader(true); // Показывать хедер при скролле вверх
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const onMobileMenuClick = () => {
    if (isOpen) {
      document.body.classList.remove("disable-scroll");
    } else {
      document.body.classList.add("disable-scroll");
    }
    setOpen(!isOpen);
  };

  const onMenuClick = () => {
    if (isOpen) {
      document.body.classList.remove("disable-scroll");
    }
    setOpen(!isOpen);
  };

  return (
    <header
      className={`header ${isOpen ? "active" : ""} ${
        showHeader ? "show" : "hide"
      }`}
    >
      <nav>
        <ul>
          {menuItems.map((item, i) => (
            <motion.li key={i} {...scrollAnimation}>
              <Link href={item.href} onClick={onMenuClick}>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
        <motion.div className="header__language" {...scrollAnimation}>
          <span className="active">ENG</span>
          <span>PLN</span>
        </motion.div>
      </nav>
      <motion.div
        {...scrollAnimation}
        className={`header__hamburger ${isOpen ? "active" : ""}`}
        onClick={onMobileMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.div>
      {/* Костыль чтоб хедер не скакал при открывании моб меню */}
      <div
        className={`header__hamburger-rock ${isOpen ? "active" : ""}`}
        onClick={onMobileMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
