import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BiSolidContact, BiSolidUser } from "react-icons/bi";
import { GoProjectRoadmap } from "react-icons/go";
import { FaBloggerB } from "react-icons/fa";
import { SiProcessingfoundation } from "react-icons/si";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("#");
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiFillHome></AiFillHome>
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <BiSolidUser></BiSolidUser>
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <GoProjectRoadmap></GoProjectRoadmap>
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <SiProcessingfoundation></SiProcessingfoundation>
        </a>
        <a
          href="#blog"
          onClick={() => setActiveNav("#blog")}
          className={activeNav === "#blog" ? "active" : ""}
        >
          <FaBloggerB></FaBloggerB>
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiSolidContact></BiSolidContact>
        </a>
      </nav>
  );
};

export default Navbar;
