import React from "react";
import logo from "../assets/imgs/logo.jpg";
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img className="animate-pulse w-20" src={logo} alt="SMB Logo" />
    </div>
  );
};

export default Loading;
