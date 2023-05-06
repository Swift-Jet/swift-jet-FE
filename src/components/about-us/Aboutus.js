import React, { useContext } from "react";



const Aboutus = () => {

  return (
    <div class="py-16 mt-20 bg-white">
      <div class="xl:container  m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div class="md:5/12 lg:w-1/2 rounded-lg">
            <img
              src="https://aeroaffaires.fr/wp-content/uploads/2021/10/gulfstreams-longest-range-aircraft-the-gulfstream-g800-202101006-1-scaled.jpg"
              alt="image"
              loading="lazy"
              width=""
              height=""
              className="rounded-xl"
            />
          </div>
          <div class="md:7/12 lg:w-1/2">
            <h2 class="text-3xl font-bold text-rose-900 md:text-4xl dark:text-white">
              What we do at Swift Jets
            </h2>
            <p class="my-8 text-x text-justify text-gray-600 dark:text-gray-300">
              Welcome to Swiftjet, a premier private jet rental company that provides luxurious and hassle-free air travel experiences to discerning travelers worldwide. Our mission is to offer unparalleled comfort, convenience, and safety in the skies, with personalized services that cater to your unique travel needs.

              At Swiftjet, we believe that traveling by private jet should be a seamless and enjoyable experience, whether you're flying for business or pleasure. That's why we've made it our top priority to provide you with the highest standards of safety, privacy, and comfort, while ensuring that you arrive at your destination on time and stress-free.
            </p>
            <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              <div class="mt-8 flex gap-4 md:items-center">
                <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400">
                    <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="w-5/6">
                  <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">Chat Anytime</h4>
                  <p class="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
                </div>
              </div>
              <div class="pt-4 flex gap-4 md:items-center">
                <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                    <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="w-5/6 mt-8">
                  <h4 class="font-semibold text-lg text-gray-700 dark:text-teal-300">Real Time Location</h4>
                  <p class="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16 pt-16">
        <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div class="md:5/12 lg:w-1/2">
            <img
              src="https://www.claylacy.com/wp-content/uploads/2018/07/Gulfstream-GIV-Exterior-Sunset.jpg"
              alt="image"
              loading="lazy"
              width=""
              height=""
              className="rounded-2xl"
            />
          </div>
          <div class="md:7/12 lg:w-1/2">
            <h2 class="text-3xl font-bold text-rose-900 md:text-4xl dark:text-white">
              Our Mission
            </h2>
            <p class="my-8 text-x text-justify text-gray-600 dark:text-gray-300">
              Our fleet of modern and well-maintained jets features the latest technology and amenities to ensure that you enjoy the ultimate in-flight experience. From spacious and comfortable seating to gourmet catering, entertainment systems, and high-speed Wi-Fi, our jets are equipped with everything you need to stay productive, relaxed, and entertained during your flight.
              Our team of experienced pilots, flight attendants, and ground staff are dedicated to providing you with exceptional service and attention to detail, from the moment you book your flight to the time you reach your final destination. We work closely with you to understand your travel needs and preferences, and tailor our services to meet your expectations
            </p>
          </div>
        </div>
      </div>

      <div class="xl:container mt-16  m-auto px-6 text-gray-600 md:px-12 xl:px-16 pt-16">
        <div class="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div class="md:5/12 lg:w-1/2 rounded-lg">
            <img
              src="https://aeroaffaires.fr/wp-content/uploads/2021/10/gulfstreams-longest-range-aircraft-the-gulfstream-g800-202101006-1-scaled.jpg"
              alt="image"
              loading="lazy"
              width=""
              height=""
              className="rounded-xl"
            />
          </div>
          <div class="md:7/12 lg:w-1/2">
            <h2 class="text-3xl font-bold text-rose-900 md:text-4xl dark:text-white">
              Why you need us
            </h2>
            <p class="my-8 text-x text-justify text-gray-600 dark:text-gray-300">
              Welcome to Swiftjet, a premier private jet rental company that provides luxurious and hassle-free air travel experiences to discerning travelers worldwide. Our mission is to offer unparalleled comfort, convenience, and safety in the skies, with personalized services that cater to your unique travel needs.

              At Swiftjet, we believe that traveling by private jet should be a seamless and enjoyable experience, whether you're flying for business or pleasure. That's why we've made it our top priority to provide you with the highest standards of safety, privacy, and comfort, while ensuring that you arrive at your destination on time and stress-free.
            </p>

          </div>
        </div>
      </div>


      <div class="py-16 mt-8">
        <div class="xl:container  m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div class="mb-16  justify-center text-center">
            <h2 class="mb-4 text-2xl font-bold text-rose-900 dark:text-white md:text-4xl">
              Our Team
            </h2>
            <p class="text-gray-600 dark:text-gray-300 text-xl">
              Swiftjet prides itself not only on award-winning technology, but also on the talent of its
              people of some of the brightest minds and most experienced executives in business.
            </p>
          </div>
          <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div class="text-center">
                <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
                <div class="mt-2 sm:mt-4">
                  <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                    David Forren
                  </h3>
                  <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                    Founder / CEO
                  </p>
                </div>
              </div>


              <div class="text-center">
                <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
                <div class="mt-2 sm:mt-4">
                  <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                    Amil Evara
                  </h3>
                  <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                    UI/UX Designer
                  </p>
                </div>
              </div>


              <div class="text-center">
                <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
                <div class="mt-2 sm:mt-4">
                  <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                    Ebele Egbuna
                  </h3>
                  <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                    Support Consultant
                  </p>
                </div>
              </div>


              <div class="text-center">
                <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
                <div class="mt-2 sm:mt-4">
                  <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                    Maria Powers
                  </h3>
                  <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                    Director of sales
                  </p>
                </div>
              </div>


              <div class="text-center">
                <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
                <div class="mt-2 sm:mt-4">
                  <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                    Delia Pawelke
                  </h3>
                  <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                    Front-end Developer
                  </p>
                </div>
              </div>


              <div class="text-center">
                <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
                <div class="mt-2 sm:mt-4">
                  <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                    Tom Lowry
                  </h3>
                  <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                    UI/UX Designer
                  </p>
                </div>
              </div>

              <div class="text-center">
                <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
                <div class="mt-2 sm:mt-4">
                  <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                    Louise Donadieu
                  </h3>
                  <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                    Support Consultant
                  </p>
                </div>
              </div>


              <div class="text-center">
                <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
                <div class="mt-2 sm:mt-4">
                  <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                    Jeff Fisher
                  </h3>
                  <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                    Project Manager
                  </p>
                </div>
              </div>


              <div class="text-center">
                <img class="rounded-xl sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto" src="https://images.unsplash.com/photo-1602452920335-6a132309c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Image Description" />
                <div class="mt-2 sm:mt-4">
                  <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                    Sophia Harrington
                  </h3>
                  <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                    Project Manager
                  </p>
                </div>
              </div>

            </div>

          </div>
          {/* <section class="bg-gray-100" id="reviews">
            <div class="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
              <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
                <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                  <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                    Don't just take our word for it...
                    <br class="hidden sm:block lg:hidden" />
                    Read reviews from our customers
                  </h2>

                  <p class="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                    veritatis illo placeat harum porro optio fugit a culpa sunt id!
                  </p>

                  <div class="hidden lg:mt-8 lg:flex lg:gap-4">
                    <button
                      class="prev-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white"
                    >
                      <span class="sr-only">Previous Slide</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 rtl:rotate-180"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    </button>

                    <button
                      class="next-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white"
                    >
                      <span class="sr-only">Next Slide</span>
                      <svg
                        class="h-5 w-5 rtl:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="-mx-6 lg:col-span-2 lg:mx-0">
                  <div class="swiper-container !overflow-hidden">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <blockquote class="flex h-full flex-col justify-between bg-white p-12">
                          <div>
                            <div class="flex gap-0.5 text-green-500">
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>
                            </div>

                            <div class="mt-4">
                              <p class="text-2xl font-bold text-pink-600 sm:text-3xl">
                                Stayin' Alive
                              </p>

                              <p class="mt-4 leading-relaxed text-gray-500">
                                No, Rose, they are not breathing. And they have no arms or
                                legs … Where are they? You know what? If we come across
                                somebody with no arms or legs, do we bother resuscitating
                                them? I mean, what quality of life do we have there?
                              </p>
                            </div>
                          </div>

                          <footer class="mt-8 text-sm text-gray-500">
                            &mdash; Michael Scott
                          </footer>
                        </blockquote>
                      </div>

                      <div class="swiper-slide">
                        <blockquote
                          class="flex h-full flex-col justify-between bg-white p-12"
                        >
                          <div>
                            <div class="flex gap-0.5 text-green-500">
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>
                            </div>

                            <div class="mt-4">
                              <p class="text-2xl font-bold text-pink-600 sm:text-3xl">
                                Stayin' Alive
                              </p>

                              <p class="mt-4 leading-relaxed text-gray-500">
                                No, Rose, they are not breathing. And they have no arms or
                                legs … Where are they? You know what? If we come across
                                somebody with no arms or legs, do we bother resuscitating
                                them? I mean, what quality of life do we have there?
                              </p>
                            </div>
                          </div>

                          <footer class="mt-8 text-sm text-gray-500">
                            &mdash; Michael Scott
                          </footer>
                        </blockquote>
                      </div>

                      <div class="swiper-slide">
                        <blockquote
                          class="flex h-full flex-col justify-between bg-white p-12"
                        >
                          <div>
                            <div class="flex gap-0.5 text-green-500">
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>

                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                              </svg>
                            </div>

                            <div class="mt-4">
                              <p class="text-2xl font-bold text-pink-600 sm:text-3xl">
                                Stayin' Alive
                              </p>

                              <p class="mt-4 leading-relaxed text-gray-500">
                                No, Rose, they are not breathing. And they have no arms or
                                legs … Where are they? You know what? If we come across
                                somebody with no arms or legs, do we bother resuscitating
                                them? I mean, what quality of life do we have there?
                              </p>
                            </div>
                          </div>

                          <footer class="mt-8 text-sm text-gray-500">
                            &mdash; Michael Scott
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8 flex justify-center gap-4 lg:hidden">
                <button
                  aria-label="Previous slide"
                  class="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
                >
                  <svg
                    class="h-5 w-5 -rotate-180 transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  class="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
                >
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section> */}

        </div>
      </div>



    </div>
  );
};


export default Aboutus;