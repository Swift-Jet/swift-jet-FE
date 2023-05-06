import React, { useContext } from "react";


const Catering = () => {
  return (

    <section className="mt-32">
      <div class="px-6 pt-32 m-auto md:py-12 xl:container md:px-12">
        <div aria-hidden="true" class="absolute inset-0 h-32 my-auto rotate-45 opacity-50 w-96 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl dark:opacity-20"></div>
        <div class="relative lg:flex lg:items-start lg:gap-12">
          <div class="text-start lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 class="text-4xl font-bold text-rose-900 md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">WORLDWIDE VIP PRIVATE JET CATERING</h1>
            <p class="mt-8 text-gray-600 dark:text-gray-300">Inflight Chef Delight is not only your best VIP private jet catering solution. After many years of collaboration with the best 5-star hotel in many countries, we are proud to offer something new to our clients. Something they have never experienced before (in addition to our absolutely amazing dishes). Local catering companies sometimes aren't reliable enough when it comes to the quality of the food they provide. By working with exclusive 5-star hotel chefs, we  meet and exceed our VIP clients’ expectations.</p>
            <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              <div class="mt-8 flex gap-4 md:items-center">
                <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">

                </div>
                <div class="w-5/6">
                  <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">Find your airport</h4>
                  <p class="text-gray-500 dark:text-gray-400">Start your search bellow or email our team 24/7</p>
                </div>
              </div>
              <div class="pt-4 flex gap-4 md:items-center">
                <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">

                </div>
                <div class="w-5/6 mt-8">
                  <h4 class="font-semibold text-lg text-gray-700 dark:text-teal-300">Request and confirm your quote</h4>
                  <p class="text-gray-500 dark:text-gray-400">Our jet catering experts are here to assist you</p>
                </div>
              </div>
              <div class="pt-4 flex gap-4 md:items-center">
                <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">

                </div>
                <div class="w-5/6 mt-8">
                  <h4 class="font-semibold text-lg text-gray-700 dark:text-teal-300">Receive your catering to your jet</h4>
                  <p class="text-gray-500 dark:text-gray-400">Our logistic team are here to ensure the best delivery process</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full overflow-hidden lg:w-7/12 lg:-mr-16 rounded-3xl">
            <img src="https://static.wixstatic.com/media/b590d0_e2d41bb86b0d41369880da273b17aca0~mv2.jpeg/v1/fill/w_575,h_814,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b590d0_e2d41bb86b0d41369880da273b17aca0~mv2.jpeg" alt="project illustration" height="" width="" />
          </div>
        </div>
      </div>

      <div class="pt-20">
        <div class="m-auto xl:container ">
          <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div class="md:5/12 lg:w-1/2">
              <img
                src="https://static.wixstatic.com/media/11062b_cfc29a0db4024eca8dde2396d2398b30~mv2.jpg/v1/fill/w_575,h_579,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_cfc29a0db4024eca8dde2396d2398b30~mv2.jpg"
                alt="image"
                loading="lazy"
                width=""
                height=""
                className="rounded-3xl"
              />
            </div>
            <div class="md:7/12 lg:w-1/2">
              <h2 class="text-3xl font-bold text-rose-900 md:text-4xl dark:text-white">
                BECAUSE YOU DESERVE ONLY THE VERY BEST PRIVATE JET CATERING
              </h2>
              <p class="my-8 text-gray-600 dark:text-gray-300">
                Inflight Chef Delight is not only your best VIP private jet catering solution. After many years of collaboration with the best 5-star hotel in many countries, we are proud to offer something new to our clients. Something they have never experienced before (in addition to our absolutely amazing dishes). Local catering companies sometimes aren't reliable enough when it comes to the quality of the food they provide. By working with exclusive 5-star hotel chefs, we  meet and exceed our VIP clients’ expectation
              </p>
              <p class="my-8 text-gray-600 dark:text-gray-300">
                Our private jet catering menu is here to provide you with some ideas, but we are more likely to create a customized menu, according to our clients' wants and needs. Our chefs are here to satisfy all your passengers' culinary desires and make their experience unique
              </p>

              <a
                href="/"
                class="relative flex items-center justify-center w-full h-12 px-8 before:absolute before:inset-0 before:rounded-full before:bg-rose-900 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-rose-900 sm:w-max">
                <span
                  class="relative text-base font-semibold text-white dark:text-white">Book now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>


  );
};

export default Catering;