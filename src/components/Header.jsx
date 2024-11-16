import React, { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import BrandIcon from "./BrandIcon";
import Button from "./Button";
import "../index.css";

function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header border-b-2 shadow-lg  w-full fixed top-0 left-0 right-0 bg-white z-10">
      <div className="flex justify-between px-4 lg:px-0">
        {/* Logo with Bounce from the left */}
        <Bounce direction="left" triggerOnce>
          <BrandIcon />
        </Bounce>

        <button
          className="block text-theme-blue lg:hidden focus:outline-none"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={`${isCollapse ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              className={`${!isCollapse ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
        <Bounce direction="up" triggerOnce cascade damping={0.15}>
          <li>
            <Button
              className={`${
                path === "/" ? "active-link" : ""
              } font-bold text-xl px-5 no-underline hover:underline`}
              type="link"
              href="/"
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              className={`${
                path === "/services" ? "active-link" : ""
              } font-bold px-5 text-xl no-underline hover:underline`}
              type="link"
              href="/services"
            >
              Services
            </Button>
          </li>
          <li className="py-2 lg:py-0">
            <Button
              className={`${
                path === "/team" ? "active-link" : ""
              } font-bold  px-5 text-xl no-underline hover:underline`}
              type="link"
              href="/team"
            >
              Team
            </Button>
          </li>
          <li className="py-2 lg:py-0">
            <Button
              className={`${
                path === "/project" ? "active-link" : ""
              } font-bold text-xl px-5 no-underline hover:underline`}
              type="link"
              href="/project"
            >
              Project
            </Button>
          </li>
        </Bounce>
        {/* "Discuss Project" Button with Bounce from the right */}
        <Bounce direction="right" triggerOnce>
          <li>
            <Button
              className="font-bold text-lg mx-auto ml-3 px-6 py-2 bg-black text-white rounded-full border-2  hover:bg-gray-400 hover:text-black hover:border-black transition duration-200"
              type="link"
              href="/discuss-project"
            >
              Discuss Project
            </Button>
          </li>
        </Bounce>
      </ul>

      {/* Mobile Menu */}
      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            <Bounce direction="up" triggerOnce cascade damping={0.15}>
              <li className="py-2 bg-white">
                <Button
                  className={`${
                    path === "/" ? "active-link" : ""
                  } font-medium px-10 no-underline hover:underline`}
                  type="link"
                  href="/"
                >
                  Home
                </Button>
              </li>
              <li className="py-2 bg-white">
                <Button
                  className={`${
                    path === "/services" ? "active-link" : ""
                  } font-medium px-10 no-underline hover:underline`}
                  type="link"
                  href="/services"
                >
                  Services
                </Button>
              </li>
              <li className="py-2 bg-white">
                <Button
                  className={`${
                    path === "/team" ? "active-link" : ""
                  } font-medium px-10 no-underline hover:underline`}
                  type="link"
                  href="/team"
                >
                  Team
                </Button>
              </li>
              <li className="py-2 bg-white">
                <Button
                  className={`${
                    path === "/project" ? "active-link" : ""
                  } font-medium px-10 no-underline hover:underline`}
                  type="link"
                  href="/project"
                >
                  Project
                </Button>
              </li>
              <li className="mx-auto my-9 bg-white">
                <Button
                  className="font-bold mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 hover:bg-dark-theme-purple border-purple-800 transition duration-200"
                  type="link"
                  href="/discuss-project"
                >
                  Discuss Project
                </Button>
              </li>
            </Bounce>
          </ul>
        </div>
      </Transition>
    </header>
  );
}

export default Header;
