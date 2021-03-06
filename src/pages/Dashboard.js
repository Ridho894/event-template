import React, { useEffect } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import background from "../image/background.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useHistory } from "react-router-dom";
import SensorsIcon from "@mui/icons-material/Sensors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessIcon from "@mui/icons-material/Business";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DayTabs from "../component/DayTabs";
import "../App.css";

const Conference = [
  {
    id: 1,
    title: "Main Entrace",
    icon: <BusinessIcon style={{ width: 100, height: 100 }} />,
  },
  {
    id: 2,
    title: "Pitch Competition",
    icon: <EventAvailableIcon style={{ width: 100, height: 100 }} />,
  },
  {
    id: 3,
    title: "Networking Area",
    icon: <SensorsIcon style={{ width: 100, height: 100 }} />,
  },
  {
    id: 4,
    title: "Coaching Sessions",
    icon: <AssignmentIcon style={{ width: 100, height: 100 }} />,
  },
];

// const day = [
//   {
//     number: 1,
//     date: "24 Desember 2021",
//     time: "07:00 - 08:00",
//     title: "Registration",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quam harum quos, magni vitae quaerat culpa, at ex repellendus accusantium deleniti dolor totam deserunt soluta, maxime distinctio possimus explicabo autem.",
//   },
//   {
//     number: 2,
//     date: "25 Desember 2021",
//     time: "07:00 - 08:00",
//     title: "Registration",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quam harum quos, magni vitae quaerat culpa, at ex repellendus accusantium deleniti dolor totam deserunt soluta, maxime distinctio possimus explicabo autem.",
//   },
//   {
//     number: 3,
//     date: "26 Desember 2021",
//     time: "07:00 - 08:00",
//     title: "Registration",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quam harum quos, magni vitae quaerat culpa, at ex repellendus accusantium deleniti dolor totam deserunt soluta, maxime distinctio possimus explicabo autem.",
//   },
// ];

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
];

const Dashboard = () => {
  const history = useHistory();
  function handleGetTicket() {
    history.push("/Register");
  }
  useEffect(() => {
    Aos.init({ disable: "mobile", duration: 1000 });
  });
  return (
    <div className={"bg-darkBlue"}>
      <div
        className={
          "bg-contain bg-no-repeat bg-right bg-black h-screen flex flex-col justify-center"
        }
        style={{ backgroundImage: `url(${background})` }}
        id="#dashboard"
      >
        <div className={"absolute top-0 w-full"}>
          <Navbar />
        </div>
        {/* Section 1 */}
        <div
          data-aos="fade-right"
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
            <div className={"md:text-left text-center"}>
              <h1 className={"text-white text-3xl font-bold"}>
                January 21 - 23
              </h1>
              <p className={"text-gray-200"}>San Fransisco</p>
            </div>
            <button
              className={
                "bg-blue-600 p-3 mt-10 md:mt-0 px-12 text-white rounded-full transform hover:scale-110 transition-transform ease-in duration-200"
              }
              onClick={handleGetTicket}
            >
              GET TICKETS
            </button>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className={"mx-auto lg:mx-24 px-2 sm:px-6 lg:px-8"} id="team">
        <div className={"py-24 space-y-12"}>
          <h1 className={"text-6xl font-bold text-white"} data-aos="fade-right">
            We connect founders from {"\n"} around the globe to share the latest
          </h1>
          <div className={"grid grid-cols-2 gap-9 sm:gap-10 xl:grid-cols-4"}>
            {CEO.map((index) => (
              <div className={"flex flex-col items-center space-y-2"}>
                <img
                  className={"rounded-full"}
                  src={index.picture}
                  alt="hello"
                />
                <h1 className={"text-white text-3xl"}>{index.name}</h1>
                <p className={"text-gray-500 text-xl"}>{index.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className={"mx-auto lg:mx-24 px-2 sm:px-6 lg:px-8 py-6"} id="project">
        <div className={"bg-darkBlues text-center py-40 space-y-24"}>
          <div className={"space-y-6"} data-aos="fade-up">
            <h1 className={"text-white text-6xl font-bold"}>
              Provided perks for you during the conference
            </h1>
            <p className={"text-white text-lg"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ut, odio reiciendis est beatae saepe.
            </p>
            <button
              className={"bg-blue-600 p-2 px-12 text-white rounded-md"}
              onClick={handleGetTicket}
            >
              GET TICKETS
            </button>
          </div>
          <div className={"grid grid-cols-2 md:grid-cols-4 gap-20 text-white"}>
            {Conference.map((index) => (
              <div
                className={"flex flex-col items-center"}
                data-aos="zoom-in-down"
              >
                {index.icon}
                <h1>{index.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className={"mx-auto lg:mx-24 px-2 sm:px-6 lg:px-8 py-6"} id="calendar">
        <div className={"grid grid-cols-1 gap-20 xl:grid-cols-2 py-60"}>
          <div className={"text-white space-y-10"}>
            <h1 className={"text-8xl font-bold"}>Schedule And Agenda</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis iste assumenda, architecto provident placeat sint
              perferendis unde. Cumque aut numquam nihil excepturi ipsam eius
              eveniet inventore voluptatibus expedita, illo nobis ullam
              voluptatum! Dignissimos, repudiandae libero iste doloremque, fuga
              voluptate id, optio ipsa sunt assumenda quis qui harum. Esse,
              incidunt eius.
            </p>
          </div>
          <div>
            <DayTabs />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Dashboard;
