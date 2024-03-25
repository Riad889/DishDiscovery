import React from "react";
import Welcome from "./Welcome";
import WhatWeServer from "./WhatWeServer";
import PopularFood from "./PopularFood";
import CustomerReview from "./CustomerReview";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Welcome />
      <WhatWeServer />
      <PopularFood />
      <CustomerReview />

      <Footer />
    </>
  );
};

export default Home;
