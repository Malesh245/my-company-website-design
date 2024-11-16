import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { Portfolios } from "../json/landingPageData";
import Header from "../components/Header";
import PortfolioDetail from "../components/PortfolioDetail";
import Footer from "../components/Footer";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const detailData = Portfolios.filter((item) => item.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <PortfolioDetail
        data={detailData.length === 1 ? [detailData[0]] : null}
      />
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
