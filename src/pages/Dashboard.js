import React, { useEffect } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import background from "../image/background.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useHistory } from "react-router-dom";

const CEO = [
  {
    name: "James",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "CEO",
  },
  {
    name: "Roby",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "CTO",
  },
  {
    name: "David",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "COO",
  },
  {
    name: "Wayne",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "Manager",
  },
  {
    name: "James",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "CEO",
  },
  {
    name: "Roby",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "CTO",
  },
  {
    name: "David",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "COO",
  },
  {
    name: "Wayne",
    picture:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "Manager",
  },
];

const Dashboard = () => {
  const history = useHistory();
  function handleLoginPage() {
    history.push("/Login");
  }
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  });
  return (
    <div className={"bg-darkBlue"}>
      <div
        className={
          "bg-contain bg-no-repeat bg-right bg-black h-screen flex flex-col justify-center"
        }
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={"absolute top-0 w-full"}>
          <Navbar />
        </div>
        {/* Sectio 1 */}
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
          <p
            className={
              "text-gray-200 text-6xl items-center text-center md:text-left"
            }
          >
            2021
          </p>
          <div
            className={
              "flex flex-col md:flex-row md:space-x-14 items-center mt-12 space-x-0"
            }
          >
            <div>
              <h1 className={"text-white text-3xl font-bold"}>
                January 21 - 23
              </h1>
              <p className={"text-gray-200"}>San Fransisco</p>
            </div>
            <button
              className={"bg-blue-600 p-4 px-12 text-white rounded-full"}
              onClick={handleLoginPage}
            >
              GET TICKETS
            </button>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className={"mx-auto lg:mx-24 px-2 sm:px-6 lg:px-8"}>
        <div className={"py-24 space-y-12"}>
          <h1 className={"text-6xl font-bold text-white"}>
            We connect founders from {"\n"} around the globe to share the latest
          </h1>
          <div className={"grid grid-cols-2 gap-9 sm:gap-10 xl:grid-cols-4"}>
            {CEO.map((index) => (
              <div className={"flex flex-col items-center space-y-2"}>
                <img className={"rounded-full"} src={index.picture} />
                <h1 className={"text-white text-3xl"}>{index.name}</h1>
                <p className={"text-gray-500 text-xl"}>{index.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className={"mx-auto lg:mx-24 px-2 sm:px-6 lg:px-8 py-6"}>
        <div className={"bg-darkBlues text-center py-60 space-y-24"}>
          <div className={"space-y-6"}>
            <h1 className={"text-white text-6xl font-bold"}>
              Provided perks for you during the conference
            </h1>
            <p className={"text-white text-lg"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ut, odio reiciendis est beatae saepe.
            </p>
            <button
              className={"bg-blue-600 p-2 px-12 text-white rounded-md"}
              onClick={handleLoginPage}
            >
              GET TICKETS
            </button>
          </div>
          <div className={"grid grid-cols-2 md:grid-cols-4 gap-5 text-white"}>
            <h1>Main Entrace</h1>
            <h1>Pitch Competition</h1>
            <h1>Networking Area</h1>
            <h1>Coaching Sessions</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
