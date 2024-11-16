import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa"; // Import icons
import BrandIcon from "./BrandIcon";
import Button from "./Button";

function Footer() {
  return (
    <div className="border-t border-gray-200 pb-6 shadow-lg">
      <div className="container flex-col mx-auto">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-black font-bold">
              Growing Your Business <br />
              Is Our Calling
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-black font-bold pt-4 pb-2">Office</h1>
            <p className="text-lg text-black font-semibold">
              mycompany@gmail.com
            </p>
            <p className="text-lg text-black font-semibold">+91-000-000-000</p>
            <p className="text-lg text-black font-semibold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit,
              Maharashtra, India, 431605
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-black font-bold pt-4 pb-2">Social</h1>
            <div className="flex space-x-4">
              {/* Facebook Button with Icon */}
              <Button
                href="https://www.facebook.com/"
                type="link"
                target="_blank"
                className="flex items-center justify-center w-14 h-14 rounded-full text-2xl text-blue-600 bg-gray-100 hover:bg-blue-600 hover:text-white transform transition duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-2xl"
                isExternal
              >
                <FaFacebook size={30} />
              </Button>

              {/* Instagram Button with Icon */}
              <Button
                href="https://www.instagram.com/"
                type="link"
                target="_blank"
                className="flex items-center justify-center w-14 h-14 rounded-full text-2xl text-pink-500 bg-gray-100 hover:bg-pink-500 hover:text-white transform transition duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-2xl"
                isExternal
              >
                <FaInstagram size={30} />
              </Button>

              {/* LinkedIn Button with Icon */}
              <Button
                href="https://www.linkedin.com/"
                type="link"
                target="_blank"
                className="flex items-center justify-center w-14 h-14 rounded-full text-2xl text-blue-700 bg-gray-100 hover:bg-blue-700 hover:text-white transform transition duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-2xl"
                isExternal
              >
                <FaLinkedin size={30} />
              </Button>

              {/* Twitter Button with Icon */}
              <Button
                href="https://twitter.com/"
                type="link"
                target="_blank"
                className="flex items-center justify-center w-14 h-14 rounded-full text-2xl text-sky-500 bg-gray-100 hover:bg-sky-500 hover:text-white transform transition duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-2xl"
                isExternal
              >
                <FaTwitter size={30} />
              </Button>

              {/* Pinterest Button with Icon */}
              <Button
                href="https://pinterest.com/"
                type="link"
                target="_blank"
                className="flex items-center justify-center w-14 h-14 rounded-full text-2xl text-red-600 bg-gray-100 hover:bg-red-600 hover:text-white transform transition duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-2xl"
                isExternal
              >
                <FaPinterest size={30} />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-black  font-bold border-t-2 pt-2">
            Copyright @2024 - All rights reserved - MyCompany
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
