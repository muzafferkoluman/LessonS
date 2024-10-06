import { useState } from "react";

import "./App.css";

const cards = [
  {
    id: 1,
    path: "/img/apple.png",
    matched: false,
  },
  {
    id: 2,
    path: "/img/apricot.png",
    matched: false,
  },
  {
    id: 3,
    path: "/img/banana.png",
    matched: false,
  },
  {
    id: 4,
    path: "/img/cherry.png",
    matched: false,
  },
  {
    id: 5,
    path: "/img/coconut.png",
    matched: false,
  },
  {
    id: 6,
    path: "/img/grape.png",
    matched: false,
  },
];

function App() {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-semibold text-center">Guessing Game</h1>
      <button className="bg-[#00A265] px-3 py-2 rounded hover:-translate-y-1 hover:shadow-lg transition-all">
        Start Game
      </button>
      <div className="grid grid-cols-3 gap-2 mt-">
        {cards.map((card) => (
          <div className="w-[150px] ">
            <img src={card.path} className=" w-full h-[130px]" alt="" />
            <img src="/img/cover-2.png" alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
