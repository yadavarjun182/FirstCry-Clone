
import {Box} from "@chakra-ui/react";
import React from "react";
import Slider from "../components/carsole/Slidersection";
import PosterGirlBoy from "../components/PosterGirlBoy";
import PremiumBoutiques from "../components/PremiumBoutiques";
import SpringList from "../components/SpringList";
import FooterPage from "./FooterPage";

const Home = () => {
  return (
      <>
          <Box top='10rem' zIndex={-9999}>            
      <Slider />
      <PremiumBoutiques />
      <PosterGirlBoy />
      <SpringList />
      <FooterPage />
          </Box>
    </>
  );
};

export default Home;



