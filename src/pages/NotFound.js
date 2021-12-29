import React from "react";
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className={"flex items-center justify-center bg-red-500 h-screen"}>
      <div className={"bg-white p-10 rounded-xl"}>
        <h1 className={"text-left text-red-500 font-bold text-2xl pb-4"}>
          Page Not Found
        </h1>
        <p>
          Looks like you've followed a broken link or entered <br /> a URL that
          doesn't exist on this site.
        </p>
        <button className={"pt-5"} onClick={() => history.push("/")}>
          <ArrowBackIos />
          Back to our site
        </button>
      </div>
    </div>
  );
};

export default NotFound;
