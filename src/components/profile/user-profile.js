import React, { useContext, useEffect, useState} from 'react';
import "../review/main"
import Layout from '../shared/layout/Layout';


const UserProfile = () => {


    const [user, setUser] = useState({})
    useEffect(() => {
     let user = JSON.parse(localStorage.getItem("user"));
     setUser(user);
      }, []);
    return (

       <Layout>
         <section class="bg-[#eeece1] mt-24 ">
            <div class="bg-white">

                <div class="container grid gap-0 mx-auto max-w-3xl mt-8">
                    <ul class="flex border-b border-gray-300 text-sm font-medium text-gray-600 px-6 md:px-0">
                        <li class="mr-8 text-gray-900 border-b-2 border-[#5C0632] "><a href="#" class="py-4 inline-block">Profile Info</a></li>
                        {/* <li class="mr-8 hover:text-gray-900"><a href="/RecentTrips" class="py-4 inline-block">Recent Trips</a></li> */}
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
                                    <input class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="text" value={user?.first_name + " " + user?.last_name} name="name" />
                                </div>
                                <hr class="border-gray-200" />
                                <div class="py-8 px-16">
                                    <label for="email" class="text-sm text-gray-600">Email Address</label>
                                    <input class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="email" name="email" value={user?.email} />
                                </div>
                                <hr class="border-gray-200" />
                                <div class="py-8 px-16">
                                    <label for="email" class="text-sm text-gray-600">Confirm Email Address</label>
                                    <input class="mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500" type="email" name="email" value="" />
                                </div>

                            </div>

                        </div>
                        <div class="p-16 py-8 bg-gray-300 rounded-b-lg border-t border-gray-200 flex items-center justify-between">
                            <p class="text-xs text-gray-500 tracking-tight mt-2">Click on Save to update your Profile Info</p>
                            <div>
                                <input type="submit" class="bg-[#5C0632] text-white text-sm font-medium px-6 py-2 rounded uppercase cursor-pointer mr-2" value="Save" />
                                <a href="/" class="bg-[#5C0632] text-white text-sm font-medium px-6 py-2 rounded uppercase cursor-pointer">Close</a>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </section>
       </Layout>
    );
};

export default UserProfile;