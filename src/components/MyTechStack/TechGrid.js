import React from "react";
import StackDB from "./StackDB.js";
const TechGrid = () => {
  return (
    <div className="px-2 sm:px-2 lg:px-52 xl:px-56 pb-16">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-16 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 px-20 ">
        {StackDB.map((item) => {
          return (
            <li key={item.id} className="flex flex-col items-center">
              <img src={item.imgURL} alt={item.title} className="bg-contain" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechGrid;
