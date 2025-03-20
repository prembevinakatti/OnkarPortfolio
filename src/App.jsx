import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-screen absolute top-0 left-0 h-screen overflow-y-hidden">
          <img
            src="https://amiralirashidi.github.io/assets/videos/background.png"
            alt=""
          />
        </div>
        <div className="h-[700px]  w-5/6 bg-gray-900 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
