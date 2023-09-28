import React from "react";
import { useEffect } from "react";
import About from "../../components/home/About";
import Banner from "../../components/home/Banner";
import Faqs from "../../components/home/Faqs";
import Options from "../../components/home/Options";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <Banner />
        <About />
        <Options />
        <Faqs />
      </div>
    </>
  );
};

export default Home;
