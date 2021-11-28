import React from "react";
import background from "../image/login.jpg";

const Login = () => {
  return (
    <div className={"grid grid-cols-2"}>
      <div className={"text-center justify-center flex-col flex items-center"}>
        <h1 className={"text-5xl mb-20"}>LOGIN</h1>
        <div className={"flex flex-col space-y-9"}>
          <input placeholder="Email" className={"p-2 border-2 outline-none"} />
          <input placeholder="Password" className={"p-2 border-2 outline-none"} />
        </div>
        <button>LOGIN</button>
      </div>
      <div>
        <div
          className={
            "bg-contain bg-no-repeat bg-right h-screen"
          }
          style={{ backgroundImage: `url(${background})` }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
