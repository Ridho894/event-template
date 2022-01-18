import React from "react";
import background from "../image/login_register.jpg";

const Register = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={"h-screen bg-cover bg-fixed bg-center"}
    >
      <div
        className={
          "bg-black bg-gradient-to-r from-black to-transparent px-24 space-y-7 h-screen bg-opacity-50 flex flex-col justify-center"
        }
      >
        <h1 className={"text-gray-300"}>START FOR FREE</h1>
        <p className={"text-6xl text-white font-bold"}>
          Create new account<span className={"text-darkBlue"}>.</span>
        </p>
        <p className={"text-white"}>
          Already A Member?{" "}
          <a className={"text-darkBlue font-bold"} href="/login">
            Log In
          </a>
        </p>
        <div className={"space-x-6"}>
          <input
            className={"p-3 rounded-xl"}
            placeholder="Enter you firstname"
          />
          <input
            className={"p-3 rounded-xl"}
            placeholder="Enter you lastname"
          />
        </div>
        <input className={"p-3 w-4/12 rounded-xl"} placeholder="Enter you email" />
        <input className={"p-3 w-4/12 rounded-xl"} placeholder="Enter you password" />
        <button className={"bg-darkBlue text-white w-4/12 py-3 rounded-full"}>REGISTER</button>
      </div>
    </div>
  );
};

export default Register;
