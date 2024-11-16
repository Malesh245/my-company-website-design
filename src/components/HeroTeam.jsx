import React from "react";

import { Fade } from "react-awesome-reveal";

import Team from "../assets/images/hero/team.png";

function HeroTeam() {
  return (
    <section
      style={{ marginTop: "150px" }}
      className="hero sm:items-center lg:items-start sm:flex-row"
    >
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 pb-10">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-black font-bold leading-tight mb-5">
            Our Team
          </h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p className=" text-xl text-black leading-relaxed">
            We are a passionate and expert team of machine learning, DevOPS,
            Frontend and Backend Developer, dedicated to helping our clients
            unlock the full potential of this transformative technology. With
            years of experience in the industry and a deep understanding of the
            latest trends and developments, we are committed to delivering
            end-to-end solutions that are tailored to meet the unique needs of
            each client. Whether you're looking to build a custom model, deploy
            an existing solution, or simply learn more about the power of
            machine learning, we are here to help you achieve your goals and
            maximize your impact
          </p>
        </Fade>
      </div>
      <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
        <Fade direction="top-right" triggerOnce delay={300}>
          <img src={Team} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
export default HeroTeam;
