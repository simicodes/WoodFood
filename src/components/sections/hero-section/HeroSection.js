import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.styles";
import {
  ContactIcons,
  HeroContent,
  ImageContainer,
  StyledButtons,
  StyledHeroSecion,
} from "./HeroSection.styles";

import { FaRegEdit, FaPhone } from "react-icons/fa";

const HeroSection = () => {
  const HeroItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <StyledHeroSecion initial="hidden" animate="visible" variants={HeroItems}>
        <HeroContent>
          <motion.h2 variants={item}>
            Spring in <span>WoodFood</span>
          </motion.h2>
          <motion.p variants={item}>The most delicious outdoor food</motion.p>
          <StyledButtons>
            <motion.button variants={item}>Capacity</motion.button>
            <motion.button variants={item}>Location</motion.button>
            <motion.button variants={item}>Seat type</motion.button>
          </StyledButtons>
        </HeroContent>
        <ContactIcons>
          <motion.a
            href="#!"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FaRegEdit />
          </motion.a>
          <motion.a
            href="#!"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FaPhone />
          </motion.a>
        </ContactIcons>
        <ImageContainer>
          <motion.img
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
            src="./images/image.png"
            alt="food"
          />
        </ImageContainer>
        {/* <ContactIcons>
          <a href="#!">
            <FaRegEdit />
          </a>
          <a href="#!">
            <FaPhone />
          </a>
        </ContactIcons> */}
      </StyledHeroSecion>
    </>
  );
};

export default HeroSection;
