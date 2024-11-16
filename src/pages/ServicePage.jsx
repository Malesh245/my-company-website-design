import React from "react";
import Service from "../components/Service";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Services } from "../json/landingPageData";

const ServicePage = () => {
  return (
    <>
      <Header />
      <Service data={Services} />
      <Footer />
    </>
  );
};

export default ServicePage;
