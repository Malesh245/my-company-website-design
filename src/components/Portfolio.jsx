import React from "react";

import { Fade } from "react-awesome-reveal";
import Button from "./Button";

function Portfolio({ data }) {
  return (
    <section
      style={{ marginTop: "150px" }}
      className="container mx-auto flex flex-col items-center mt-20"
    >
      <Fade direction="right" delay={300} duration={1200} triggerOnce>
        <h1 className="text-5xl text-black text-center font-bold">
          Our Selected Project
        </h1>
      </Fade>
      <Fade direction="left" delay={300} duration={1200} triggerOnce>
        <p className="font-semibold text-lg text-black text-center mb-12">
          We are ready to scale up your business with our great work result.
        </p>
      </Fade>

      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fade
            direction="up"
            bottom
            triggerOnce
            delay={300 * index}
            duration={2000}
            key={index}
          >
            <Button type="link" href={`/project/${item.id}`}>
              <div className="group rounded-2xl shadow-xl w-auto m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                <div className="relative">
                  <img
                    src={item.imageUrl}
                    alt="Portfolio"
                    className="rounded-t-2xl z-0"
                  />
                  <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                    <button className="focus:outline-none">
                      <svg
                        className="w-20 h-20 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="py-4">
                  <h2 className="text-black text-center text-xl">
                    {item.title}
                  </h2>
                  <p className=" text-black text-center">{item.type}</p>
                </div>
              </div>
            </Button>
          </Fade>
        ))}
      </div>

      <Fade bottom triggerOnce>
        <Button
          href="/project"
          type="link"
          className="flex flex-grow-0 w-36 h-12 sm:w-40 sm:h-14 lg:w-44 lg:h-16 xl:w-36 xl:h-12 bg-black hover:bg-gray-400 text-white px-5 border hover:border-black items-center mt-14 rounded-full justify-center transition duration-300  hover:text-black"
        >
          <p className="font-semibold py-3 lg:text-lg xl:text-base">See More</p>
          <svg
            className="w-4 h-4"
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
          <svg
            className="w-4 h-4 -ml-2"
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
      </Fade>
    </section>
  );
}
export default Portfolio;