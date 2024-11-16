import React from "react";

import {
  Services,
  Portfolios,
  Advantages,
  Testimonials,
} from "../json/landingPageData";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Advantage from "../components/Advantage";
import Testimonial from "../components/Testimonial";
import Discuss from "../components/Discuss";
import Footer from "../components/Footer";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Service data={Services} />
      <Portfolio data={Portfolios} />
      <Advantage data={Advantages} />
      <Testimonial data={Testimonials} />
      <Discuss />
      <Footer />
    </>
  );
};
