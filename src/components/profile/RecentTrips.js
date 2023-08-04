import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Layout from "../shared/layout/Layout";
import "../review/main";

const RecentTrips = () => {
    const [bookings, setBookings] = useState([]);
    const [emptyLegs, setEmptyLegs] = useState([]);
    const getButtonColor = (status) => {
        switch (status) {
            case 'New':
                return 'red';
            case 'Processing':
                return 'red';
            case 'Confirmed':
                return 'red';
            default:
                return 'gray';
        }
    };
    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get(
                `https://swift-jet-backend-staging.onrender.com/api/v1/booking/all`
            );
            let user = JSON.parse(localStorage.getItem("user"));
            const _booking = data?.data.filter((item) => item.user.email === user.email && item.booking_details.tripType != "Shared");
            const _booking1 = data?.data.filter((item) => item.user.email === user.email && item.booking_details.tripType === "Shared");
            console.log("_booking1", _booking1);
            setBookings(_booking);
            setEmptyLegs(_booking1);
        }
        fetchData();
    }, [])
    return (
        <Layout>

            <section class="bg-[#eeece1] mt-32">
                <div class="bg-white">
                    <div class="container grid gap-0 mx-auto max-w-4xl mt-8">

                        <ul class="flex border-b border-gray-300 text-sm font-medium text-gray-600 px-6 md:px-0">
                            <li class="mr-8 text-gray-900  "><a href="/UserProfile" class="py-4 inline-block">Profile Info</a></li>
                            <li class="mr-8 hover:text-gray-900 border-b-2 border-[#5C0632]"><a class="py-4 inline-block">Recent Trips</a></li>
                        </ul>


                        <div className="container grid gap-0  mt-3 p-2 mx-auto sm:p-4 dark:text-gray-100 ">

                            <div className="overflow-x-auto mr-8 w-full shadow-md  rounded-lg mx-auto  flex overflow-hidden rounded-b-none mt-3  ">
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
                                        <tr className="text-left text-rose-900">
                                            <th className="p-3">Booking ID</th>
                                            <th className="p-3">Trip Type</th>
                                            <th className="p-3">Source</th>
                                            <th className="p-3">Destination</th>
                                            <th className="p-3">Status</th>
                                            <th className="p-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bookings.map((item, i) => {
                                                return (
                                                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                        <td className="p-3 font-medium">
                                                            <p>{item?.booking_number}</p>
                                                        </td>
                                                        <td className="p-3">
                                                            <p>{item.booking_details.tripType}</p>
                                                        </td>
                                                        <td className="p-3 font-medium">

                                                            {item.booking_details.formData?.map((d, i) => {
                                                                return (
                                                                    <p>{d.source.value.iata_code}</p>
                                                                )
                                                            })}
                                                        </td>
                                                        <td className="p-3">

                                                            {item.booking_details.formData?.map((d, i) => {
                                                                return (
                                                                    <p>{d.destination.value.iata_code}</p>
                                                                )
                                                            })}
                                                        </td>

                                                     
                                                        <td className="p-3">
                                                            <button className="bg-rose-700 text-white px-6 py-1.5 w-28 font-medium rounded-md">
                                                                {item?.status}
                                                            </button>
                                                        </td>
                                                        <td className="pl-3 underline" onClick={() => {
                                                            localStorage.setItem("single-booking", JSON.stringify(item))
                                                        }}>
                                                            <a href="/single-booking" className="rounded-md">
                                                                view details
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="container grid gap-0  mt-3 p-2 mx-auto sm:p-4 dark:text-gray-100 ">
                            <h3>Your Empty Legs Order</h3>
                            <div className="overflow-x-auto mr-8 w-full shadow-md  rounded-lg mx-auto  flex overflow-hidden rounded-b-none mt-3  ">
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
                                        <tr className="text-left text-rose-900">
                                            <th className="p-3">Booking ID</th>
                                            <th className="p-3">Trip Type</th>
                                            <th className="p-3">Source</th>
                                            <th className="p-3">Destination</th>
                                            <th className="p-3">Status</th>
                                            <th className="p-3">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            emptyLegs.map((item, i) => {
                                                return (
                                                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                        <td className="p-3 font-medium">
                                                            <p>{item?.booking_number}</p>
                                                        </td>
                                                        <td className="p-3">
                                                            <p>Empty Leg</p>
                                                        </td>
                                                        <td className="p-3 font-medium">


                                                            <p>{item.booking_details.source.value.iata_code}</p>

                                                        </td>
                                                        <td className="p-3">

                                                            <p>{item.booking_details.destination.value.iata_code}</p>
                                                        </td>

                                                        <td className="p-3">
                                                            <button className="bg-rose-700 text-white px-6 py-1.5 w-28 font-medium rounded-md">
                                                                {item?.status}
                                                            </button>
                                                        </td>
                                                        <td className="pl-3 underline" onClick={() => {
                                                            localStorage.setItem("single-booking", JSON.stringify(item))
                                                        }}>
                                                            <a href="/empty-legs" className="rounded-md">
                                                                view details
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    );
};

export default RecentTrips;