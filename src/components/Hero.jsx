import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Slide } from "react-awesome-reveal";
import BuildWebsite from "../assets/images/hero/BuildWebsite.webp";
import Button from "./Button";

function Hero() {
  return (
    <section
      style={{ marginTop: "150px" }}
      className="hero transition-opacity duration-700 flex flex-col lg:flex-row items-center"
    >
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8 mb-8">
        <Slide direction="left" triggerOnce>
          <h1 className="text-5xl sm:text-6xl text-White font-bold leading-tight mb-5">
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                height: "150px",
                display: "block",
              }}
              sequence={[`Your Vision\n Our Passion.`, 1000, ""]}
              repeat={Infinity}
            />
          </h1>

          <p className="text-xl text-black leading-relaxed mb-16">
            Our mission is to revolutionize the way the world creates and
            interacts with generative AI. Generative AI has the potential to
            transform industries and unlock new possibilities for creativity and
            innovation. Our end-to-end solutions make it easy for businesses and
            individuals to leverage the power of generative AI, from data
            collection, labeling data, and building models to deployment. With a
            focus on innovation, collaboration, and ethical responsibility, we
            are dedicated to creating a world where generative AI is a force for
            positive change, driving growth, progress, and social impact for
            all.
          </p>

          <Button
            href="/project"
            type="link"
            className="flex w-71 h-18 items-center px-14 py-5 text-white font-bold text-xl bg-black rounded-lg shadow-2xl hover:bg-gray-400 hover:border-2 transition duration-200 hover:text-black"
          >
            See Our Work
            <svg
              className="ml-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </Slide>
      </div>

      <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
        <Slide direction="right" triggerOnce>
          <img className="" src={BuildWebsite} alt="Build Website" />
        </Slide>
      </div>
    </section>
  );
}

export default Hero;
