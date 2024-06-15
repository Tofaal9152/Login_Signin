import React from "react";

// Adding Style.js and assets
import style from "./style";
import library from "./assets/library.jpg";
// Importing Components
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

// App Building
const App = () => {
  return (
    <div
      style={{ backgroundImage: `url(${library})` }}
      className="bg-cover h-screen"
    >
      {/* navbar */}
      <div className=" w-full overflow-hidden">
        <div className={`${style.paddingX} ${style.flexCenter} z-10`}>
          <div className={`${style.boxWidth} z-10`}>
            <Navbar />
          </div>
        </div>
      </div>
      {/* Login */}
<div className="flex items-center justify-center">

      <Login />
</div>
    </div>
  );
};

export default App;
