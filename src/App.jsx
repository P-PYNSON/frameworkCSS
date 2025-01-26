import { useState } from "react";
import cheese from "./assets/cheese.png";
import box from "./assets/box.png";
import crackers from "./assets/crackers.png";
import parsley from "./assets/parsley.png";
import wine from "./assets/wine.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <main className="w-screen min-h-screen bg-black/30 relative items-center flex flex-col -z-50">
      {/* white background*/}
      <div className="absolute bg-white w-10/12 h-[94%] mt-5 rounded-2xl max-w-screen-md -z-40"></div>

      {/* promo flag*/}
      <div className="w-full max-w-screen-lg h-[94%] mt-8 flex flex-col items-center">
        <div className="bg-green-500 h-14 w-8/12 rounded-b-xl text-white flex items-center justify-center gap-2">
          <p className="underline">Discover all our offers! </p>
          <p className="font-bold"> Free delivery for purchases over €100!</p>
        </div>

      {/* teaser */}
        <div className="bg-white border-4 border-green-500/50 w-10/12 p-4 mt-6 rounded-xl shadow-2xl shadow-black/40 flex">
          <div className="w-[37%] h-full">
            <img src={box} alt="box" className="w-64 object-contain" />
          </div>
          <div className="w-[60%] h-full flex flex-col justify-center items-center text-center">
            <p className="text-2xl text-green-500 font-bold">"A Taste of Joy Awaits!"</p>
            <p className="text-md font-bold text-green-500 mt-4">
              Surprise your taste buds with a curated selection of irresistible flavors. Perfect for any occasion or just because—you deserve a treat! <br /> Don't wait to indulge in this deliciously thoughtful gift. Supplies are limited, so grab yours now and savor the moment! 🍫🍪🍬
            </p>
            <p className="text-xl text-red-700 mt-5 font-bold">Order Your Gift Bag Today!</p>
          </div>
        </div>

        {/* cards */}
        <div className="bg-white border-4 border-green-500/50 w-full h-36 mt-8 rounded-xl shadow-2xl shadow-black/40">
        
        </div>

        {/* CTA*/}
        <div className="bg-white border-4 border-green-500/50 w-11/12 h-36 mt-8"></div>
      </div>
    </main>
  );
}

export default App;
