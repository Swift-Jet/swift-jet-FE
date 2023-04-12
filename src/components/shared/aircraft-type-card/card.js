import React, { useContext } from "react";
import "./card.css";

const Card = () => {
  return (
    <div>
      <div class="max-w-sm  border-gray-200 rounded-lg mt-8 mb-8 2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-4/5 ac-group-list">
        <a href="#">
          <img
            class="rounded-full py-4 px-4 border border-[#EDCADC] border-4"
            src="https://thumbs.dreamstime.com/b/air-travel-concept-jet-above-clouds-square-composition-39585443.jpg"
            alt=""
          />
        </a>
        
        <div class="pt-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#4D4D4D]">
            Turboprop
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Propeller Aircraft are the most economical choice for short to mid-range trips. 
          </p>
          <button class="bg-white-500 hover:bg-[#5C0632] hover:text-white border text-[#5C0632] font-bold py-3 px-6 rounded-full">
            View All Turboprop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
