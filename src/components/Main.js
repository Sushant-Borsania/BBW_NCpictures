import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
export default function Main() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Services />
    </React.Fragment>
  );
}
