import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeroSecion = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100% - 70px);
`;

export const HeroContent = styled.div`
  align-self: flex-start;
  margin-top: 80px;
  flex: 1;

  h2 {
    font-size: 70px;
    font-weight: 500;
    line-height: 90px;

    span {
      color: #ffc14d;
      font-weight: 700;
      display: block;
    }
  }

  p {
    margin: 5px 0 25px 0;
  }

  button {
    background: none;
    outline: none;
    border: 2px solid #eeeeee;
    padding: 17px 34px;
    margin-right: 20px;
    border-radius: 30px;
    color: ${({ theme }) => theme.fontColor};

    &:hover {
      background: #ffc14d;
      cursor: pointer;
      color: ${({ theme }) => theme.background};
    }
  }
`;

export const StyledButtons = styled.div`
  display: flex;
`;

export const ImageContainer = styled(motion.div)`
  flex: 1;

  img{
    position: absolute;
    bottom: 0;
    right: 0;
    height: 85vh;
    width: auto;
  }
`;

export const ContactIcons = styled(motion.div)`
  display: flex;
  position: absolute;
  bottom: 50px;
  left: 100px;

  a {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    border: 2px solid #dadada;
    color: ${({ theme }) => theme.fontColor};
    font-size: 20px;

    &:hover {
      background: #ffc14d;
      cursor: pointer;
      color: ${({ theme }) => theme.background};
    }
  }
`;
