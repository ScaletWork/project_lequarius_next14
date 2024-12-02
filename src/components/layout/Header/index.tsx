"use client";

import Link from "next/link";
import { FC, useState } from "react";

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
    <header className={`header ${isOpen ? "active" : ""}`}>
      <nav>
        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link href={item.href} onClick={onMenuClick}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`header__hamburger ${isOpen ? "active" : ""}`}
        onClick={onMobileMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
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
