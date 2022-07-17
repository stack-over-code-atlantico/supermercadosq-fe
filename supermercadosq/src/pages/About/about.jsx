import React from "react";
import { Navbar } from "../../components/Navbar";
import { AboutComponent } from "../../components/About";
import { MenuContext } from "../../Provider/Menu.provider";
import { Footer } from "../../components/Footer";

function About() {
  const color = "#3ebcd3";
  return (
    <MenuContext.Provider value={{ color }}>
      <Navbar />
      <AboutComponent />
      <Footer />
    </MenuContext.Provider>
  );
}

export default About;
