import React, { useContext } from "react";
import "./estimatelayout.css";
import Steps from "../stepper/Steps"



const EstimateLayout = () => {
    return (

        <div className="mx-auto font-[Poppins]">
            <section className="section bg-[#eeece1]">
                <div className="container mx-auto flex items-start">
                    <div class="rounded-md w-full p-10">
                        <ol class="list-reset flex">
                            <li><a href="#" class="text-blue-600 hover:text-blue-700">Flight</a></li>
                            <li><span class="text-gray-500 mx-2">/</span></li>
                            <li class="text-gray-500">Round trips</li>
                        </ol>
                        <div className="mt-10">
                            <div className="">
                                <h1 className="text-2xl font-bold text-rose-900">Estimated Price For Your Flight</h1>
                            </div>
                            <div className="mt-10">
                                <Steps />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-rose-900">
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="px-10 text-2xl text-white m-3">
                        We Recommend
                    </div>
                    <div className="px-8 m-3 text-white">
                        Filter By: <span> Recommended </span>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default EstimateLayout;
