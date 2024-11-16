import React from "react";

import { Fade } from "react-awesome-reveal";
import heroPortfolio from "../assets/images/hero/portfolioHero.png";

function Service({ data }) {
  return (
    <section style={{ marginTop: "150px" }} className="">
      <div className="hero transition-opacity duration-700 flex flex-col lg:flex-row items-center mb-5 pb-6">
        <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 pb-5">
          <Fade direction="up" delay={300} duration={1200} triggerOnce>
            <h1 className="text-6xl text-black font-bold leading-tight mb-10">
              Our Services
            </h1>
          </Fade>
          <Fade direction="up" delay={300} duration={1200} triggerOnce>
            <p className=" text-xl text-black leading-relaxed">
              We are dedicated to providing cutting-edge solutions that empower
              businesses and individuals to unlock their full potential. Our
              services include innovative AI-powered tools, advanced automation,
              and data-driven strategies designed to drive success. Whether
              you're looking to optimize your workflows, enhance productivity,
              or stay ahead of the competition, Genaikit offers tailored
              solutions to meet your unique needs. We believe in delivering
              results that matter, helping you navigate the ever-evolving
              digital landscape with confidence and ease.
            </p>
          </Fade>
        </div>
        <div className="w-full sm:w-1/2 sm:pr-12">
          <Fade direction="up" delay={300} duration={1200} triggerOnce>
            <img src={heroPortfolio} alt="Hero" />
          </Fade>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#7f66aa] to-[#b094dc] ">
        <div className="container mx-auto pt-20 pb-28">
          {/* <Fade direction="right" delay={300} duration={1200} triggerOnce> */}
          <h1 className="text-5xl text-black text-center font-bold">
            We Serve The Best Work
          </h1>
          {/* </Fade> */}
          {/* <Fade direction="left" delay={300} duration={1200} triggerOnce> */}
          <p className=" text-lg text-white font-semibold text-center mb-12">
            We are ready to scale up your business with our great service.
          </p>
          {/* </Fade> */}

          <div className="grid grid-rows-3 px-10 gap-8 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16 ">
            {data.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              // <Fade
              //   direction={item.animation}
              //   delay={300}
              //   duration={2000}
              //   key={item}
              //   triggerOnce
              // >
              <div>
                <div className="bg-white group rounded-2xl shadow-2xl border border-black transform transition duration-500 hover:scale-105">
                  <img
                    src={item.imageUrl}
                    alt="Service"
                    className="w-full rounded-t-2xl"
                  />
                  <div className="border-t-black border rounded-b-2xl shadow-2xl ">
                    <h2 className="text-black text-center font-bold text-3xl py-7 rounded-b-2xl">
                      {item.title}
                    </h2>
                    <p className=" text-center text-black font-semibold text-xl p-5 rounded-b-2xl">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
              // </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Service;
