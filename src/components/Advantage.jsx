import React from "react";

import Fade from "react-awesome-reveal";

function Advantage({ data }) {
  return (
    <section>
      <div className="bg-[#b094dc] py-20 mb-24 sm:mb-18 xl:mb-16">
        <div className="container mx-auto">
          {/* <Fade bottom delay={300} duration={1200}> */}
          <h1 className="text-5xl text-black text-center font-bold">
            Why Choose Us
          </h1>

          <p className="text-lg text-white text-center mb-12 font-semibold sm:mb-5 xl:mb-0">
            Why you should choose us to handle your project.
          </p>
          {/* </Fade> */}

          <div className="flex flex-col sm:flex-row">
            <div className="flex-col">
              {data[0].map((item, index) => (
                // <Fade bottom delay={300 * index} duration={2000} key={index}>
                <div>
                  <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                    <img src={item.imageUrl} alt="" className="w-1/3" />
                    <div className="flex-col pl-5">
                      <h2 className="text-black text-2xl">{item.title}</h2>
                      <p className="font-semibold text-black">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                // </Fade>
              ))}
            </div>
            <div className="flex-col -mt-4 sm:mt-14">
              {data[1].map((item, index) => (
                // <Fade bottom delay={300 * index} duration={2000} key={index}>
                <div>
                  <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                    <img src={item.imageUrl} alt="" className="w-1/3" />
                    <div className="flex-col pl-5">
                      <h2 className="text-black text-2xl">{item.title}</h2>
                      <p className="font-semibold text-black">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                // </Fade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Advantage;
