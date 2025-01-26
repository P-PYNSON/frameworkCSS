import { useState } from "react";
import cheese from "./assets/cheese.png";
import box from "./assets/box.png";
import crackers from "./assets/crackers.png";
import parsley from "./assets/parsley.png";
import wine from "./assets/wine.png";
import arrow from "./assets/arrow.png";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <main className="w-screen min-h-screen bg-black relative items-center flex flex-col -z-50">
      {/* white background*/}
      <div className="absolute bg-white w-10/12 h-[94%] mt-5 rounded-2xl max-w-screen-md -z-40 "></div>

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
        <div className="w-full flex flex-row gap-4 relative">
          <Card image={wine} name={"Vin de Bordeaux"} text={"Rich, smooth, and full of flavor—elevate any moment with our premium red wine. Order now and indulge!"}></Card>
          <Card image={cheese} name={"Fromage de chêvre"} text={"Creamy, tangy, and irresistibly fresh—perfect for any occasion. Try it today!"}></Card>
          <Card image={crackers} name={"Crackers"} text={"Crisp, flavorful, and the perfect pairing for your favorite spreads. Grab yours now!"}></Card>
          <Card image={parsley} name={"Herbs"} text={"Fresh, aromatic, and full of flavor—elevate your dishes with our premium herbs!"}></Card>
        </div>

        {/* arrow */}
        <div>
          <img src={arrow} alt="arrow" className="w-1/2 h-auto -mt-8 mx-auto" />
        </div>

        {/* CTA*/}
        <div className="bg-white border-4 border-green-500/50 w-11/12  -mt-6 p-6 -z-20 shadow-2xl shadow-black/40">
          <p className="text-xl text-green-500 font-bold text-center">Bring the finest flavors to your table—fresh, natural, and crafted with care. From creamy cheeses to crisp crackers and aromatic herbs, every bite is a step closer to perfection. Discover the taste that makes every meal unforgettable !</p>
          <button className="border-8 border-red-700 text-red-700 text-2xl font-bold mt-4 px-12 py-6 flex items-end justify-center mx-auto">ORDER NOW !</button>
        </div>
      </div>
    </main>
  );
}

export default App;
