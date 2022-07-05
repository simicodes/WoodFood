import React from "react";
import {
  Link,
  Logo,
  NavLinks,
  SocialIcons,
  StyledNav,
  Themeicon,
} from "./Navbar.styles";

import { FaFacebook, FaInstagram, FaMoon, FaSun } from "react-icons/fa";

import { motion } from "framer-motion";

const Navbar = ({ theme, toggleTheme }) => {
  const NavItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <StyledNav initial="hidden" animate="visible" variants={NavItems}>
        <Logo variants={item}>
          Wood<span>Food</span>
        </Logo>
        <NavLinks>
          <Link href="#" variants={item}>
            All menus
          </Link>
          <Link href="#" variants={item}>
            Delivery
          </Link>
          <Link href="#" variants={item}>
            Bar
          </Link>
          <Link href="#" variants={item}>
            Contact
          </Link>
        </NavLinks>
        <Themeicon onClick={toggleTheme} colorTheme={theme} variants={item}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Themeicon>
        <SocialIcons>
          <motion.div variants={item}>
            {" "}
            <a href="#!">
              <FaFacebook />
            </a>
          </motion.div>
          <motion.div variants={item}>
            <a href="#!">
              <FaInstagram />
            </a>
          </motion.div>
        </SocialIcons>
      </StyledNav>
    </>
  );
};

export default Navbar;
