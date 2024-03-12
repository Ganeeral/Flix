"use client";

import React from "react";
import Link from "next/link";

const categories = [
  {
    title: "Все",
    to: "/",
  },
  {
    title: "Видеоигры",
    to: "/shorts",
  },
  {
    title: "Музыка",
    to: "/subscriptions",
  },
  {
    title: "Сериалы",
    to: "/music",
  },
  {
    title: "Триллеры",
    to: "/music",
  },
];

const Slider: React.FC = () => {

  return (
    <div className="category flex">
      <div className="max-w-[100vw] overflow-hidden flix:max-w-[85vw]">
        <div className="flex items-center justify-between px-4">
          <div className="flex gap-x-6 rounded-[4px] overflow-auto scrollbar-hide relative">
            {categories.map((category, index) => (
              <div key={index} className="flex-shrink-0">
                <Link href={category.to}>
                  <div className="bg-[#5C5C5C] text-white text-sm px-4 py-2 rounded-[6px]">
                    {category.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
