import React from "react";
import Slider from "../components/carsole/Slidersection";
import PosterGirlBoy from "../components/PosterGirlBoy";
import PremiumBoutiques from "../components/PremiumBoutiques";
import SpringList from "../components/SpringList";
import FooterPage from "./FooterPage";

const Home = () => {
  return (
    <>
      <Slider />
      <PremiumBoutiques />
      <PosterGirlBoy />
      <SpringList />
      <FooterPage />
    </>
  );
};

export default Home;
