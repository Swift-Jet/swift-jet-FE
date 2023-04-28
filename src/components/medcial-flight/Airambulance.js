import React, { useContext } from "react";


const Airambulance = () => {

    return (

<section className="mt-32">
<div class="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
    <div aria-hidden="true" class="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"></div>
    <div class="relative lg:flex lg:items-center lg:gap-12">
        <div class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 class="text-rose-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">Air Ambulance Evacuation and Medical Air Transport <span class="text-primary dark:text-primaryLight">Support.</span></h1>
            <p class="mt-8 text-gray-600 dark:text-gray-300">Medical private jets or helicopters have been specially equipped for a patient that requires extensive or urgent medical assistance during transportation. They offer a full ICU setup (stretchers, bases with power and oxygen, and medical equipment)</p>
            <div class="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
                <img src="https://upload.wikimedia.org/wikipedia/en/b/b4/Cebu_Doctors%27_University_Hospital_logo.png" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4VWnPBkhD14UuF4eaRAeq7wwjwwxE3G20OXU5e3vjOl0Rxxsfr_Ju_PWTyA9N0d4SFM&usqp=CAU" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                <img src="https://p.kindpng.com/picc/s/693-6939801_manila-doctors-hospital-manila-doctors-hospital-logo-png.png" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7H5oLXba4VK7Wlz3WY3P6ZfNVqbpVm3gS9UJIdkRFYg0IQOfQ9juq_cpXhVAVd7l7Cw&usqp=CAU" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
            </div>
        </div>
        <div class="overflow-hidden w-full lg:w-7/12 lg:-mr-16 rounded-3xl">
            <img src="https://www.airmedandrescue.com/sites/default/files/styles/full_size_view/public/2021-04/london-air-ambulance-statistics.jpg?h=4d6c89ec&itok=jN4HLKBo" alt="project illustration" height="" width=""/>
        </div>
    </div>
  </div>
  
  <div class="pt-20">
  <div class="xl:container m-auto ">
    <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div class="md:5/12 lg:w-1/2">
        <img
          src="https://media.istockphoto.com/id/481633068/photo/ambulance-helicopter.jpg?s=612x612&w=0&k=20&c=a-cLmet4y5U8wcPKiQ0ARwzVYO0hloDuypBMWZMQzIk="
          alt="image"
          loading="lazy"
          width=""
          height=""
          className="rounded-3xl"
        />
      </div>
      <div class="md:7/12 lg:w-1/2">
        <h2 class="text-3xl font-bold text-rose-900 md:text-4xl dark:text-white">
        Medical Evacuation flight All Around the Globe
        </h2>
        <p class="my-8 text-gray-600 dark:text-gray-300">
          Fast, reliable and confidential emergency and non-emergency medical air transportation
        </p>
        <p class="my-8 text-gray-600 dark:text-gray-300">
        We ensure that the aircraft is manned by highly skilled medical flight crew including a doctor and a nurse (sometimes a third medical professional is also included depending on the medical case and/or the length of the air ambulance journey) for private charter air ambulance. All aircraft we use, utilize state-of-the-art lifter/ loader systems to ensure quick loading and unloading of patients with no manual lifting while providing the highest level of safety possible.
        </p>

        <a
            href="/"
            class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-rose-900 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-rose-900 sm:w-max">
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

export default Airambulance;