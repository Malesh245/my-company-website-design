import React from "react";
import Fade from "react-awesome-reveal";

// Function to calculate luminance of a hex color
const getLuminance = (hex) => {
  // Remove '#' if present
  hex = hex.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  // Apply the luminance formula
  const a = [r, g, b].map(function (v) {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  const luminance = a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  return luminance;
};

// Function to generate a random light background color
const getRandomLightColor = () => {
  const hexRange = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random() * 16)];
  }
  return color;
};

function AllTeam({ data }) {
  return (
    <section className="container mx-0 sm:mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-32 sm:gap-14 lg:gap-10 mx-16 justify-items-center">
        {data.map((item, index) => {
          const backgroundColor = getRandomLightColor();
          const luminance = getLuminance(backgroundColor);
          const textColor = luminance > 0.5 ? "text-black" : "text-white"; // If luminance is high, use dark text, otherwise use light text

          return (
            <Fade bottom triggerOnce delay={200 * index} key={index}>
              <div
                style={{ backgroundColor }}
                className="flex flex-col w-44 h-60 sm:w-56 sm:h-72 rounded-xl shadow-xl border border-light-theme-purple justify-center transform transition duration-500 hover:scale-105"
              >
                <div className="flex justify-center xl:mb-5">
                  <img
                    src={item.imageUrl}
                    alt="Team Member"
                    className="flex w-32 h-32 rounded-full"
                  />
                </div>
                <h2 className={`${textColor} text-center text-xl`}>
                  {item.name}
                </h2>
                <p className={`font-light ${textColor} text-center mb-3`}>
                  {item.position}
                </p>
              </div>
            </Fade>
          );
        })}
      </div>
    </section>
  );
}

export default AllTeam;
