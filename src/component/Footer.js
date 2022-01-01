import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-red-400">
      <div
        className="
        bg-blue-700
      px-24
        py-24
      mx-auto
      flex
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
      flex-wrap flex-col
    "
      >
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <p
            className="
          flex
          title-font
          font-medium
          items-center
          md:justify-start
          justify-center
          text-gray-900
        "
          >
            <i className="fas fa-cubes fa-lg text-purple-500"></i>
            <span className="ml-3 text-xl">Tailwind elements</span>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            quam?
          </p>
        </div>
        <div
          className="
        flex-grow flex flex-wrap
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
        text-center
      "
        >
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
            >
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <p className="text-gray-600 hover:text-gray-800">First Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Second Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Third Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Fourth Link</p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
            >
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <p className="text-gray-600 hover:text-gray-800">First Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Second Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Third Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Fourth Link</p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
            >
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <p className="text-gray-600 hover:text-gray-800">First Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Second Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Third Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Fourth Link</p>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="
            title-font
            font-medium
            text-gray-900
            tracking-widest
            text-sm
            mb-3
          "
            >
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <p className="text-gray-600 hover:text-gray-800">First Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Second Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Third Link</p>
              </li>
              <li>
                <p className="text-gray-600 hover:text-gray-800">Fourth Link</p>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div
          className="
          px-24 
        mx-auto
        py-4
        flex flex-wrap flex-col
        sm:flex-row
      "
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2021 Copyright:
            <p
              onClick={() => window.open("https://drop-zhip.vercel.app/")}
              className="text-gray-600 cursor-pointer"
            >
              DropZhip.co.id
            </p>
          </p>
          <span
            className="
          inline-flex
          sm:ml-auto sm:mt-0
          mt-2
          justify-center
          sm:justify-start
        "
          >
            <p className="text-gray-500">
              <i className="fab fa-facebook-f"></i>
            </p>
            <p className="ml-3 text-gray-500">
              <i className="fab fa-twitter"></i>
            </p>
            <p className="ml-3 text-gray-500">
              <i className="fab fa-linkedin-in"></i>
            </p>
            <p className="ml-3 text-gray-500">
              <i className="fab fa-youtube"></i>
            </p>
            <p className="ml-3 text-gray-500">
              <i className="fab fa-instagram"></i>
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
