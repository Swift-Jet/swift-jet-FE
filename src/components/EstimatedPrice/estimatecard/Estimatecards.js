import * as React from "react";
import Cardslider from "../cardslider/Cardslider";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import Frame636 from "../estimatecard/Frame636.png"

export default function BasicGrid() {
    return (
        <div class=" bg-[#eeece1] mx-auto px-4 md:px-8 lg:px-16">
            <div class="flex flex-col md:flex-row ">
                <div class="w-full md:w-5/6">
                    <div class="py-16">
                        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                            <div class="lg:bg-white  dark:lg:bg-white lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-start md:space-y-0 lg:items-center">
                                <div class="md:5/12 lg:w-3/4">
                                    <Cardslider />
                                </div>
                                <div class="md:7/12 lg:w-3/4 flex flex-column gap-y-2 ">
                                    <h2 class="text-sm text-gray-300 md:text-xl dark:text-gray-400 ">
                                        Beachcraft
                                    </h2>
                                    <p class="text-xs text-gray-400 dark:text-gray-400">Turboprop</p>
                                    <p class="text-xs text-rose-900 dark:text-rose-900 font-bold md:text-3xl">
                                        <span>&#8358;</span> 150,000
                                    </p>
                                    <p class="text-gray-400 dark:text-gray-400">
                                        Model: Beech BE200 Super King Air
                                    </p>
                                    <div class="flex justify-between items-center text-gray-600">
                                        <div class="flex items-center">
                                            <svg className="svg-icon h-3 w-3 text-gray-600 fill-current mr-2 " viewBox="0 0 20 20">
                                                <path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
                                            </svg>
                                            <p className="text-xs">
                                                <span class="text-xs text-gray-400 ">Passenger: 8</span><span className="ml-2">|</span> </p>

                                        </div>
                                        <div class="flex items-center">
                                            <svg className="svg-icon h-3 w-3 text-gray-600 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" ><path d="M350 976v-42l80-60V623L80 726v-58l350-206V226q0-21 14.5-35.5T480 176q21 0 35.5 14.5T530 226v236l350 206v58L530 623v251l80 60v42l-130-37-130 37Z" /></svg>
                                            <p className="text-xs">
                                                <span class="text-xs text-gray-400 ">
                                                    Speed: 972Kts
                                                </span><span className="ml-2">
                                                    |</span>
                                            </p>
                                        </div>
                                        <div class="flex items-center">
                                            <svg className="svg-icon h-3 w-3 text-gray-600 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" ><path d="M480 976q-84 0-157-31.5T196 859q-54-54-85-127.5T80 574q0-84 31-156.5T196 291q54-54 127-84.5T480 176q84 0 157 30.5T764 291q54 54 85 126.5T880 574q0 84-31 157.5T764 859q-54 54-127 85.5T480 976Zm0-58q35-36 58.5-82.5T577 725H384q14 60 37.5 108t58.5 85Zm-85-12q-25-38-43-82t-30-99H172q38 71 88 111.5T395 906Zm171-1q72-23 129.5-69T788 725H639q-13 54-30.5 98T566 905ZM152 665h159q-3-27-3.5-48.5T307 574q0-25 1-44.5t4-43.5H152q-7 24-9.5 43t-2.5 45q0 26 2.5 46.5T152 665Zm221 0h215q4-31 5-50.5t1-40.5q0-20-1-38.5t-5-49.5H373q-4 31-5 49.5t-1 38.5q0 21 1 40.5t5 50.5Zm275 0h160q7-24 9.5-44.5T820 574q0-26-2.5-45t-9.5-43H649q3 35 4 53.5t1 34.5q0 22-1.5 41.5T648 665Zm-10-239h150q-33-69-90.5-115T565 246q25 37 42.5 80T638 426Zm-254 0h194q-11-53-37-102.5T480 236q-32 27-54 71t-42 119Zm-212 0h151q11-54 28-96.5t43-82.5q-75 19-131 64t-91 115Z" /></svg>
                                            <p className="text-xs">
                                                <span class="text-xs text-gray-400">
                                                    Range: 972 Kts
                                                </span>
                                            </p>
                                        </div>

                                    </div>
                                    <div class="flex justify-between items-center text-gray-600 mt-2">
                                        <div class="flex items-center">
                                            <svg className="svg-icon h-3 w-3 text-gray-600 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" ><path d="M140 896q-26 0-43-17t-17-43V683q37-8 61.5-37.5T166 576q0-40-24.5-70T80 469V316q0-26 17-43t43-17h680q26 0 43 17t17 43v153q-37 7-61.5 37T794 576q0 40 24.5 69.5T880 683v153q0 26-17 43t-43 17H140Zm0-60h680V727q-38-26-62-65t-24-86q0-47 24-86t62-65V316H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140 727v109Zm340-63q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-167q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-167q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0 137Z" /></svg>
                                            <p className="text-xs">
                                                <span class="text-xs text-gray-400">Luggage: 59cu.ft</span><span className="ml-2">|</span></p>

                                        </div>
                                        <div class="flex items-center">
                                            <svg className="svg-icon h-3 w-3 text-gray-600 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" ><path d="M480 936 320 776l44-44 86 86V334l-86 86-44-44 160-160 160 160-44 44-86-86v484l86-86 44 44-160 160Z" /></svg>
                                            <p className="text-xs">
                                                <span class="text-xs text-gray-400">Height: 1.78cm  </span><span className="ml-2">|</span>
                                            </p>
                                        </div>
                                        <div class="flex items-center">
                                            <svg className="svg-icon h-3 w-3 text-gray-600 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"><path d="M281 736 121 576l160-160 43 43-88 87h489l-87-88 42-42 160 160-160 160-42-42 87-88-489 1 87 87-42 42Z" /></svg>
                                            <p className="text-xs">
                                                <span class="text-xs text-gray-400">width: 1.4cm</span></p>
                                        </div>

                                    </div>
                                    <p class="text-gray-300 text-xs dark:text-gray-900 mt-3">
                                        Midsize jets (also known as mid-sized jets) are the most popular category of private jets and provide a cost-effective option for flights of up to 4 hours, for up to 8 passengers
                                    </p>

                                    <div class="py-2 ">


                                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                                            <div class="py-2">
                                                <img src={Frame636} class="" alt="" />
                                            </div>
                                            <div class="py-4">
                                                <p class=" text-sm text-gray-300 dark:text-gray-900">
                                                    Tron Aviation
                                                </p>
                                            </div>
                                            <div class="py-4">
                                                <div class="flex items-center">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>


                                                </div>
                                            </div>
                                            <div class="py-4">
                                                <h3 class="ml-2 text-sm text-gray-900 dark:text-gray-700">15 reviews</h3>

                                            </div>


                                        </div>
                                    </div>

                                    <button type="button" class="text-white hover:text-white border border-rose-900 bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900">Book Now</button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2">
                    <div className="py-16">
                        <div className="flex flex-col p-5 bg-white rounded-xl gap-y-8 ">
                            <div className=" flex flex-row justify-between align-center">
                                <p>Your Search</p>
                                <button type="button" class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900">Round Trip</button>
                            </div>
                            <div class="flex justify-between items-center  text-gray-600">
                                <div class="flex items-center">
                                    <p className="font-bold">DNMM <br />
                                        NNAMDI AZIKIWE INT. AIRPORT</p>
                                </div>
                                <div class="flex items-center">
                                    <svg className="svg-icon h-6 w-6 text-gray-600 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" ><path d="M271 936 80 745l192-192 42 42-120 120h649v60H194l119 119-42 42Zm418-337-42-42 119-119H117v-60h649L646 258l42-42 192 192-191 191Z" /></svg>
                                </div>
                                <div class="flex items-center">
                                    <p className="font-bold">EGKB <br />
                                        ILORIN INT. AIRPORT</p>
                                </div>

                            </div>
                            <div class="flex justify-between items-center text-gray-600">
                                <div class="flex items-center">
                                    <svg className="svg-icon h-5 w-5 text-gray-600 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" ><path d="M180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Zm300 230q-17 0-28.5-11.5T440 616q0-17 11.5-28.5T480 576q17 0 28.5 11.5T520 616q0 17-11.5 28.5T480 656Zm-160 0q-17 0-28.5-11.5T280 616q0-17 11.5-28.5T320 576q17 0 28.5 11.5T360 616q0 17-11.5 28.5T320 656Zm320 0q-17 0-28.5-11.5T600 616q0-17 11.5-28.5T640 576q17 0 28.5 11.5T680 616q0 17-11.5 28.5T640 656ZM480 816q-17 0-28.5-11.5T440 776q0-17 11.5-28.5T480 736q17 0 28.5 11.5T520 776q0 17-11.5 28.5T480 816Zm-160 0q-17 0-28.5-11.5T280 776q0-17 11.5-28.5T320 736q17 0 28.5 11.5T360 776q0 17-11.5 28.5T320 816Zm320 0q-17 0-28.5-11.5T600 776q0-17 11.5-28.5T640 736q17 0 28.5 11.5T680 776q0 17-11.5 28.5T640 816Z" /></svg>
                                    <p className="text-sm">
                                        <span class="text-sm text-gray-400">15/09/23</span><span className="ml-2">AT</span><span className="ml-2">10:30 HRS</span></p>
                                </div>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon h-5 w-5 text-gray-600 fill-current mr-2" viewBox="0 96 960 960" ><path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" /></svg>
                                    <p><span class="text-sm text-gray-400">PASSENGER</span></p>
                                </div>
                            </div>
                            <div class="border-t border-gray-300 text-gray-600">
                                <div className="flex justify-between items-center mt-4">
                                    <div class="flex items-center ">
                                        <p className="font-bold">EGKB <br />
                                            ILORIN INT. AIRPORT</p>
                                    </div>
                                    <div class="flex items-center">
                                        <svg className="svg-icon h-6 w-6 text-gray-600 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" ><path d="M271 936 80 745l192-192 42 42-120 120h649v60H194l119 119-42 42Zm418-337-42-42 119-119H117v-60h649L646 258l42-42 192 192-191 191Z" /></svg>
                                    </div>
                                    <div class="flex items-center">
                                        <p className="font-bold">DNMM <br />
                                            NNAMDI AZIKIWE INT. AIRPORT</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center text-gray-600">
                                <div class="flex items-center">
                                    <svg className="svg-icon h-5 w-5 text-gray-600 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" ><path d="M180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Zm300 230q-17 0-28.5-11.5T440 616q0-17 11.5-28.5T480 576q17 0 28.5 11.5T520 616q0 17-11.5 28.5T480 656Zm-160 0q-17 0-28.5-11.5T280 616q0-17 11.5-28.5T320 576q17 0 28.5 11.5T360 616q0 17-11.5 28.5T320 656Zm320 0q-17 0-28.5-11.5T600 616q0-17 11.5-28.5T640 576q17 0 28.5 11.5T680 616q0 17-11.5 28.5T640 656ZM480 816q-17 0-28.5-11.5T440 776q0-17 11.5-28.5T480 736q17 0 28.5 11.5T520 776q0 17-11.5 28.5T480 816Zm-160 0q-17 0-28.5-11.5T280 776q0-17 11.5-28.5T320 736q17 0 28.5 11.5T360 776q0 17-11.5 28.5T320 816Zm320 0q-17 0-28.5-11.5T600 776q0-17 11.5-28.5T640 736q17 0 28.5 11.5T680 776q0 17-11.5 28.5T640 816Z" /></svg>
                                    <p className="text-sm">
                                        <span class="text-sm text-gray-400">15/09/23</span><span className="ml-2">AT</span><span className="ml-2">10:30 HRS</span></p>
                                </div>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon h-5 w-5 text-gray-600 fill-current mr-2" viewBox="0 96 960 960" ><path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" /></svg>
                                    <p><span class="text-sm text-gray-400">PASSENGER</span></p>
                                </div>
                            </div>
                            <button type="button" class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900">Search Again</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className="font-normal text-2xl font-bold text-black">We Also Found Other Flights</h1>

                <div class="w-full md:w-1/2">
                    <div className="py-4">
                        <div className="flex flex-col p-5 bg-white rounded-xl gap-y-8 ">
                            <div className=" flex flex-row justify-between align-center">
                                <img src="https://img.freepik.com/free-photo/airplane-sunset_1150-8338.jpg?w=996&t=st=1676535166~exp=1676535766~hmac=516deea9b35288988675df3790fa804f6d05d1c229cb7daef47fcbd6a5255c53" class="rounded-full h-14 w-14" alt="" />
                                <p className="font-bold">Dassault Falcon 900</p>
                                <p className="font-bold text-rose-900 text-xl"> <span>&#8358;</span> 160,000</p>
                                <button type="button" class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900">Book Now</button>
                            </div>


                            <div class="flex justify-between items-center  text-gray-600 m-4">
                                <div class="flex items-center">
                                    <p className="text-xs">Bajarn Aviation Company</p>
                                </div>
                                <div class="flex items-center">

                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div class="flex items-center">
                                    <p class=" text-sm text-gray-900 dark:text-gray-700">15 reviews</p>

                                </div>

                            </div>




                        </div>
                    </div>
                    <div className="py-4">
                        <div className="flex flex-col p-5 bg-white rounded-xl gap-y-8 ">
                            <div className=" flex flex-row justify-between align-center">
                                <img src="https://img.freepik.com/free-photo/airplane-sunset_1150-8338.jpg?w=996&t=st=1676535166~exp=1676535766~hmac=516deea9b35288988675df3790fa804f6d05d1c229cb7daef47fcbd6a5255c53" class="rounded-full h-14 w-14" alt="" />
                                <p className="font-bold">Dassault Falcon 900</p>
                                <p className="font-bold text-rose-900 text-xl"> <span>&#8358;</span> 160,000</p>
                                <button type="button" class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900">Book Now</button>
                            </div>


                            <div class="flex justify-between items-center  text-gray-600 m-4">
                                <div class="flex items-center">
                                    <p className="text-xs">Bajarn Aviation Company</p>
                                </div>
                                <div class="flex items-center">

                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div class="flex items-center">
                                    <p class=" text-sm text-gray-900 dark:text-gray-700">15 reviews</p>

                                </div>

                            </div>




                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col p-5 bg-white rounded-xl gap-y-8 ">
                            <div className=" flex flex-row justify-between align-center">
                                <img src="https://img.freepik.com/free-photo/airplane-sunset_1150-8338.jpg?w=996&t=st=1676535166~exp=1676535766~hmac=516deea9b35288988675df3790fa804f6d05d1c229cb7daef47fcbd6a5255c53" class="rounded-full h-14 w-14" alt="" />
                                <p className="font-bold">Dassault Falcon 900</p>
                                <p className="font-bold text-rose-900 text-xl"> <span>&#8358;</span> 160,000</p>
                                <button type="button" class="text-rose-900 hover:text-white border border-rose-900 hover:bg-rose-900 focus:ring-4 focus:outline-none focus:ring-rose-900 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-rose-900 dark:text-rose-900 dark:hover:text-white dark:hover:bg-rose-900 dark:focus:ring-rose-900">Book Now</button>
                            </div>


                            <div class="flex justify-between items-center  text-gray-600 m-4">
                                <div class="flex items-center">
                                    <p className="text-xs">Bajarn Aviation Company</p>
                                </div>
                                <div class="flex items-center">

                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <div class="flex items-center">
                                    <p class=" text-sm text-gray-900 dark:text-gray-700">15 reviews</p>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}