import React from "react";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Accomplishment from "./Accomplishment";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <section>
        <Welcome />
        <AboutMe />
        <Technologies />
        <Accomplishment />
      </section>
    </>
  );
};

export default Home;
