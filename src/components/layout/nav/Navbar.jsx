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
              },
            },
          }

          const item ={
            hidden: {opacity: 0, y: -100},
            visible: {opacity: 1, y: 0}
          }

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={NavItems}>
        <StyledNav>
          <motion.div variants={item}>
            <Logo>
              Wood<span>Food</span>
            </Logo>
          </motion.div>
          <NavLinks>
            <Link href="#">All menus</Link>
            <Link href="#">Delivery</Link>
            <Link href="#">Bar</Link>
            <Link href="#">Contact</Link>
          </NavLinks>
          <Themeicon onClick={toggleTheme} colorTheme={theme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </Themeicon>
          <SocialIcons>
            <a href="#!">
              <FaFacebook />
            </a>
            <a href="#!">
              <FaInstagram />
            </a>
          </SocialIcons>
        </StyledNav>
      </motion.div>
    </>
  );
};

export default Navbar;
