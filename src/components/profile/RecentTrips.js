import React, { useContext } from "react";
import "../review/main"

const RecentTrips = () => {
    return (


        <section class="bg-[#eeece1] ">
            <div class="bg-white">

                <div class="container grid gap-0 mx-auto max-w-3xl mt-8">
                    <h1 class="text-2xl font-bold text-gray-700 px-6 md:px-0">Profile Settings</h1>
                    <ul class="flex border-b border-gray-300 text-sm font-medium text-gray-600 px-6 md:px-0">
                        <li class="mr-8 text-gray-900  "><a href="/UserProfile" class="py-4 inline-block">Profile Info</a></li>
                        <li class="mr-8 hover:text-gray-900 border-b-2 border-[#5C0632]"><a class="py-4 inline-block">Recent Trips</a></li>
                        <li class="mr-8 hover:text-gray-900"><a href="#_" class="py-4 inline-block">Settings</a></li>
                    </ul>


                    <div className="container grid gap-0  mt-3 p-2 mx-auto sm:p-4 dark:text-gray-100 ">
                        <h2 className="mb-0 text-2xl font-semibold leading-tight">Trips</h2>
                        <div className="overflow-x-auto mr-8 w-full bg-[#eeece1]  rounded-lg mx-auto  flex overflow-hidden rounded-b-none mt-3  ">
                            <table className="min-w-full text-xs">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col className="w-24" />
                                </colgroup>
                                <thead className="dark:bg-gray-700">
                                    <tr className="text-left">
                                        <th className="p-3">Invoice #</th>
                                        <th className="p-3">Client</th>
                                        <th className="p-3">Issued</th>
                                        <th className="p-3">Due</th>
                                        <th className="p-3 text-right">Amount</th>
                                        <th className="p-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        <td className="p-3">
                                            <p>97412378923</p>
                                        </td>
                                        <td className="p-3">
                                            <p>Microsoft Corporation</p>
                                        </td>
                                        <td className="p-3">
                                            <p>14 Jan 2022</p>
                                            <p className="dark:text-gray-400">Friday</p>
                                        </td>
                                        <td className="p-3">
                                            <p>01 Feb 2022</p>
                                            <p className="dark:text-gray-400">Tuesday</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>$15,792</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <span>Pending</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        <td className="p-3">
                                            <p>97412378923</p>
                                        </td>
                                        <td className="p-3">
                                            <p>Tesla Inc.</p>
                                        </td>
                                        <td className="p-3">
                                            <p>14 Jan 2022</p>
                                            <p className="dark:text-gray-400">Friday</p>
                                        </td>
                                        <td className="p-3">
                                            <p>01 Feb 2022</p>
                                            <p className="dark:text-gray-400">Tuesday</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>$275</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <span>Pending</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        <td className="p-3">
                                            <p>97412378923</p>
                                        </td>
                                        <td className="p-3">
                                            <p>Coca Cola co.</p>
                                        </td>
                                        <td className="p-3">
                                            <p>14 Jan 2022</p>
                                            <p className="dark:text-gray-400">Friday</p>
                                        </td>
                                        <td className="p-3">
                                            <p>01 Feb 2022</p>
                                            <p className="dark:text-gray-400">Tuesday</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>$8,950,500</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <span>Pending</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        <td className="p-3">
                                            <p>97412378923</p>
                                        </td>
                                        <td className="p-3">
                                            <p>Nvidia Corporation</p>
                                        </td>
                                        <td className="p-3">
                                            <p>14 Jan 2022</p>
                                            <p className="dark:text-gray-400">Friday</p>
                                        </td>
                                        <td className="p-3">
                                            <p>01 Feb 2022</p>
                                            <p className="dark:text-gray-400">Tuesday</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>$98,218</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                <span>Pending</span>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentTrips;