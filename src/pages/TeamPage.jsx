import React from "react";
import { TeamMembers } from "../json/landingPageData";

import Header from "../components/Header";
import HeroTeam from "../components/HeroTeam";
import AllTeam from "../components/AllTeam";
import Footer from "../components/Footer";

const TeamPage = () => {
  return (
    <>
      <Header />
      <HeroTeam />
      <AllTeam data={TeamMembers} />
      <Footer />
    </>
  );
};

export default TeamPage;
