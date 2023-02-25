import React from "react";
import Slider from "../Components/carsole/Slidersection";
import PosterGirlBoy from "../Components/PosterGirlBoy";
import PremiumBoutiques from "../Components/PremiumBoutiques";

import SpringList from "../Components/SpringList";
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
