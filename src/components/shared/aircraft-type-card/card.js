import React, { useContext } from "react";
import "./card.css";

const Card = () => {
  return (
    <div>
      <div class="max-w-sm bg-white  border-gray-200 rounded-lg mt-8 mb-8 ac-group-list">
        <a href="#">
          <img
            class="rounded-full"
            src="https://thumbs.dreamstime.com/b/air-travel-concept-jet-above-clouds-square-composition-39585443.jpg"
            alt=""
          />
        </a>
        
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button class="bg-white-500 hover:bg-white-700 border text-[#5C0632] font-bold py-4 px-12 rounded-full">
            View All Turboprop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
