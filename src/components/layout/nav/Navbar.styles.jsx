import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const Logo = styled(motion.div)`
  font-weight: 700;
  font-size: 25px;

  span {
    color: #eeeeee;
  }
`;

export const NavLinks = styled.div``;

export const Link = styled(motion.a)`
  display: inline-block;
  text-decoration: none;
  margin-right: 50px;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 500;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #ffc14d;
  }
`;

export const Themeicon = styled(motion.div)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme, colorTheme }) =>
    colorTheme === "dark" ? "#ffc14d" : theme.fontColor};
`;

export const SocialIcons = styled.div`
  div {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  display: flex;

  a {
    color: ${({ theme }) => theme.fontColor};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #eeeeee;
    border-radius: 10px;
    padding: 12px;

    &:hover {
      color: ${({ theme }) => theme.background};
      background: #ffc14d;
    }
  }
`;
