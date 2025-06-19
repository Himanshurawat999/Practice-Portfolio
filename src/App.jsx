import React from "react";
import "./App.css";

function App() {
  return (
    <main className="w-screen h-screen josefin-sans lg:grid lg:grid-cols-[55%_45%] lg:grid-rows-[10%_90%]">
      {/* <div className="left"> */}
      <img
        src="./src/assets/images/logo.svg"
        alt="logo"
        className="w-40 h-8 mt-12 mb-12 ml-8 lg:ml-34"
      />
      <div className="bg-[url('./src/assets/images/hero-mobile.jpg')] w-full h-128 bg-no-repeat bg-cover lg:col-start-2 lg:col-span-full lg:row-span-full lg:bg-[url('./src/assets/images/hero-desktop.jpg')] lg:h-full"></div>
      <div className="mt-24 text-center lg:text-left lg:ml-34">
        <p className="text-6xl mb-8 tracking-[0.6rem] lg:text-7xl">
          <span className="text-[var(--desaturated-red)]">WE'RE</span>
          <br />
          COMING
          <br />
          SOON
        </p>  
        <p className="text-[var(--desaturated-red)] w-96 m-10 mx-auto lg:ml-0">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <div className="flex justify-center relative w-96 m-auto mb-24 overflow-hidden lg:ml-0">
          <input
            type="email"
            className="w-96 h-12 px-6 py-8 border-2 border-[#F1E8E6] text-[-var(--gradient-start-2)] rounded-full"
            placeholder="Email Address"
          />
          <button className="w-24 h-16 rounded-full absolute top-[0.1rem] right-[0.1rem] bg-[linear-gradient(135deg,_hsl(0,_80%,_86%),_hsl(0,_74%,_74%))]">
            <img
              src="./src/assets/images/icon-arrow.svg"
              alt="arrow"
              className="ml-10"
            />
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
