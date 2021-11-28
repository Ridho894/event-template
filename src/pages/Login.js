import React from "react";
import background from "../image/login.jpg";

const Login = () => {
  return (
    <div className={"grid grid-cols-2"}>
      <div className={"text-center justify-center flex-col flex items-center"}>
        <h1 className={"text-5xl mb-20"}>LOGIN</h1>
        <div className={"flex flex-col space-y-9"}>
          <input placeholder="Email" />
          <input placeholder="Password" />
        </div>
      </div>
      <div>
        <div
          className={
            "bg-contain bg-no-repeat bg-right h-screen flex flex-col justify-center"
          }
          style={{ backgroundImage: `url(${background})` }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
