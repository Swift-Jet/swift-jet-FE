import React, { useContext } from "react";
import "../review/main"

const UserProfile = () => {
    return (


        <section class="bg-[#eeece1] ">
            <div class="bg-white">

                <div class="container grid gap-0 mx-auto max-w-3xl mt-8">
                    <h1 class="text-2xl font-bold text-gray-700 px-6 md:px-0">Profile Settings</h1>
                    <ul class="flex border-b border-gray-300 text-sm font-medium text-gray-600 px-6 md:px-0">
                        <li class="mr-8 text-gray-900 border-b-2 border-[#5C0632] "><a href="#" class="py-4 inline-block">Profile Info</a></li>
                        <li class="mr-8 hover:text-gray-900"><a href="/RecentTrips" class="py-4 inline-block">Recent Trips</a></li>
                        {/* <li class="mr-8 hover:text-gray-900"><a href="#_" class="py-4 inline-block">Settings</a></li> */}
                    </ul>
                    <form action="{{ route('profile.save') }}" method="POST" enctype="multipart/form-data">

                        <div class="w-full bg-[#eeece1]  rounded-lg mx-auto  flex overflow-hidden rounded-b-none mt-3">
                            <div class="w-1/3 bg-gray-100 p-8 hidden md:inline-block">
                                <h2 class="font-medium text-md text-gray-700 mb-4 tracking-wide">Profile Info</h2>
                                <p class="text-xs text-gray-500">Update your basic profile information such as Email Address and Name</p>
                            </div>
                            <div class="md:w-2/3 w-full">
                                <div class="py-8 px-16">
                                    <label for="name" class="text-sm text-gray-600">Name</label>
                                    <input class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="text" value="" name="name" />
                                </div>
                                <hr class="border-gray-200" />
                                <div class="py-8 px-16">
                                    <label for="email" class="text-sm text-gray-600">Email Address</label>
                                    <input class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="email" name="email" value="" />
                                </div>
                                <hr class="border-gray-200" />
                                <div class="py-8 px-16">
                                    <label for="email" class="text-sm text-gray-600">Confirm Email Address</label>
                                    <input class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="email" name="email" value="" />
                                </div>

                            </div>

                        </div>
                        <div class="p-16 py-8 bg-gray-300 clearfix rounded-b-lg border-t border-gray-200">
                            <p class="float-left text-xs text-gray-500 tracking-tight mt-2">Click on Save to update your Profile Info</p>
                            <input type="submit" class="bg-[#5C0632] text-white text-sm font-medium px-6 py-2 rounded float-right uppercase cursor-pointer" value="Save" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;