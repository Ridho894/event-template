import React, { useEffect } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import background from "../image/background.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  });
  return (
    <div className={"bg-blue-600"}>
      <div
        className={
          "bg-contain bg-no-repeat bg-right bg-black h-screen flex flex-col justify-center"
        }
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={"absolute top-0 w-full"}>
          <Navbar />
        </div>
        <div
          data-aos="fade-up"
          className={"mx-auto lg:mx-24 px-2 sm:px-6 lg:px-8"}
        >
          <h1
            className={
              "text-white text-center md:text-left text-7xl md:text-8xl items-center flex"
            }
          >
            BreakIt Conference
          </h1>
          <p className={"text-gray-200 text-6xl items-center text-center md:text-left"}>2021</p>
          <div className={"flex flex-col md:flex-row md:space-x-14 items-center mt-12 space-x-0"}>
            <div>
              <h1 className={"text-white text-3xl font-bold"}>
                January 21 - 23
              </h1>
              <p className={"text-gray-200"}>San Fransisco</p>
            </div>
            <button className={"bg-blue-600 p-4 px-12 text-white rounded-full"}>
              GET TICKETS
            </button>
          </div>
        </div>
      </div>
      <div className={"mx-auto lg:mx-24 px-2 sm:px-6 lg:px-8"}>
        <h1 className={"text-6xl text-white"}>
          We connect founders from around the globe to share the latest
        </h1>
      </div>
    </div>
  );
};
export default Dashboard;
