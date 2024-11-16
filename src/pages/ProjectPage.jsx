import React from "react";

import { Portfolios } from "../json/landingPageData";
import Header from "../components/Header";
import HeroPortfolio from "../components/HeroPortfolio";
import AllPortfolio from "../components/AllPortfolio";
import Discuss from "../components/Discuss";
import Footer from "../components/Footer";

const ProjectPage = () => {
  return (
    <>
      <Header />
      <HeroPortfolio />
      <AllPortfolio data={Portfolios} />
      <Discuss />
      <Footer />
    </>
  );
};

export default ProjectPage;
