import React from "react";
import logoprimary from "../signInlayout/logoprimary.png";




const Trackflight = () => {
  return (

    <div class="antialiased bg-white">
      <div class="max-w-lg mx-auto mt-40 my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 class="text-4xl font-medium">Track Your Booking</h1>
        <p class="text-slate-500">Fill with the Tracking ID sent to your mail</p>

        <form action="" class="my-10">
          <div class="flex flex-col space-y-5">
            <label for="Tracking Id">
              <p class="font-medium text-slate-700 pb-2">Tracking ID</p>
              <input id="text" name="text" type="text" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter Your Tracking ID" />
            </label>

            <button class="w-full py-3 font-medium text-white bg-rose-900 hover:bg-rose-900 rounded-lg border-rose-900 hover:shadow inline-flex space-x-2 items-center justify-center">

              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" className="w-6 h-6">
                <path d="M878-40 758-160q-21 17-46.5 23.5T660-130q-70.833 0-120.417-49.618Q490-229.235 490-300.118 490-371 539.618-420.5q49.617-49.5 120.5-49.5Q731-470 780.5-420.417 830-370.833 830-300q0 26-6.5 52T800-202L920-82l-42 42ZM659.859-190Q706-190 738-221.859q32-31.859 32-78T738.141-378q-31.859-32-78-32T582-378.141q-32 31.859-32 78T581.859-222q31.859 32 78 32ZM840-530h-60v-250h-60v90H240v-90h-60v600h250v60H180q-26 0-43-17t-17-43v-600q0-26 17-43t43-17h202q7-35 34.5-57.5T480-920q36 0 63.5 22.5T578-840h202q26 0 43 17t17 43v250ZM480-780q17 0 28.5-11.5T520-820q0-17-11.5-28.5T480-860q-17 0-28.5 11.5T440-820q0 17 11.5 28.5T480-780Z" fill="white" />
              </svg>


              <span>Track</span>
            </button>
          </div>
        </form>
      </div>

    </div>


  );
};

export default Trackflight;