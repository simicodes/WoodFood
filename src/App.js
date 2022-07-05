//https:dribbble.com/shots/15873582-WoodFood-Web-Design-with-Illustration/attachments/7698209?mode=media
import React, { useState } from "react";
import { GlobalStyles } from "./components/Globals.styles";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./components/layout/nav/Navbar";
import HeroSection from "./components/sections/hero-section/HeroSection";

const Container = styled.div`
  height: 100vh;
  padding: 0 100px;
  position: relative;
`;

//Light and Dark THEME
//Light......
const LightTheme = {
  background: "white",
  fontColor: "black",
};

//Dark......
const DarkTheme = {
  background: "black",
  fontColor: "white",
};

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <Container>
        <GlobalStyles />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {/* <button onClick={() => toggleTheme()}>Change Theme</button> */}
        <HeroSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
