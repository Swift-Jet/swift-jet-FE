import React, { useContext } from "react";
//import privatejet from "../BookingCards/privatejet.jpeg";
//import frame from "../BookingCards/Frame636.png";
//import weapon from "../BookingCards/no-weapons-icon.svg";
//import smoking from "../BookingCards/no-smoking-area-icon.svg";
//import sharpobject from "../BookingCards/no-knife-icon.svg";
//import flameable from "../BookingCards/no-fire-flame-icon.svg";

const BookingCards = () => {
    return (
        <div class="2xl:container mx-auto">
            <div
                id="main"
                class="m-8 grid grid-cols-1 gap-6 justify-evenly md:grid-cols-1 lg:grid-cols-3" >
                <div class="flex justify-center bg-white rounded-lg h-auto lg:col-span-2 ">
                    <div className="w-full flex-col">
                        <div className="w-full h-7 rounded-t-lg bg-[#EDCADC] ">
                            <p className="px-3 py-2  text-bold"> Flight</p>
                        </div>
                        <div className="text-xl">
                            <p className=" p-3">SJ-BW-1077</p>
                        </div>
                        <div class="max-w-[85rem] px-6 py-10 sm:px-6 lg:px-8 lg: mx-auto">
                            <div class="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
                                <div class="lg:col-span-2">
                                    <div class="lg:pr-6 xl:pr-12">
                                        <p class="text-xl font-bold "> Leg 1</p>
                                    </div>
                                </div>

                                <div class="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-left-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-gray-700">
                                    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                                        <div className="">
                                            <p class="text-sm">
                                                Nnamdi Aziorder-lastkiwe International Airport,
                                                (Nigeria) DNMM
                                            </p>
                                        </div>
                                        <div>
                                            <p class="text-xl ml-8">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="48"
                                                    viewBox="0 96 960 960"
                                                    width="48"
                                                >
                                                    <path d="m600 856-42-42 208-208H80v-60h686L558 338l42-42 280 280-280 280Z" />
                                                </svg>
                                            </p>
                                        </div>

                                        <div>
                                            <p class="text-sm  ">
                                                Ilorin International Airport, (Nigeria) EGKB
                                            </p>
                                        </div>
                                        <div className="flex py-1 gap-2 col-span-2 ">
                                            <svg
                                                width="14"
                                                height="16"
                                                viewBox="0 0 14 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.00065 12.667C7.13251 12.667 7.2614 12.6279 7.37103 12.5546C7.48066 12.4814 7.56611 12.3773 7.61657 12.2554C7.66703 12.1336 7.68023 11.9996 7.65451 11.8703C7.62878 11.7409 7.56529 11.6222 7.47206 11.5289C7.37882 11.4357 7.26003 11.3722 7.13071 11.3465C7.00139 11.3207 6.86735 11.3339 6.74553 11.3844C6.62371 11.4349 6.51959 11.5203 6.44634 11.6299C6.37308 11.7396 6.33398 11.8685 6.33398 12.0003C6.33398 12.1771 6.40422 12.3467 6.52925 12.4717C6.65427 12.5968 6.82384 12.667 7.00065 12.667ZM10.334 12.667C10.4658 12.667 10.5947 12.6279 10.7044 12.5546C10.814 12.4814 10.8994 12.3773 10.9499 12.2554C11.0004 12.1336 11.0136 11.9996 10.9878 11.8703C10.9621 11.7409 10.8986 11.6222 10.8054 11.5289C10.7122 11.4357 10.5934 11.3722 10.464 11.3465C10.3347 11.3207 10.2007 11.3339 10.0789 11.3844C9.95705 11.4349 9.85293 11.5203 9.77967 11.6299C9.70642 11.7396 9.66732 11.8685 9.66732 12.0003C9.66732 12.1771 9.73756 12.3467 9.86258 12.4717C9.9876 12.5968 10.1572 12.667 10.334 12.667ZM10.334 10.0003C10.4658 10.0003 10.5947 9.96123 10.7044 9.88797C10.814 9.81472 10.8994 9.7106 10.9499 9.58878C11.0004 9.46696 11.0136 9.33292 10.9878 9.2036C10.9621 9.07428 10.8986 8.95549 10.8054 8.86225C10.7122 8.76902 10.5934 8.70552 10.464 8.6798C10.3347 8.65408 10.2007 8.66728 10.0789 8.71774C9.95705 8.7682 9.85293 8.85365 9.77967 8.96328C9.70642 9.07291 9.66732 9.2018 9.66732 9.33366C9.66732 9.51047 9.73756 9.68004 9.86258 9.80506C9.9876 9.93009 10.1572 10.0003 10.334 10.0003ZM7.00065 10.0003C7.13251 10.0003 7.2614 9.96123 7.37103 9.88797C7.48066 9.81472 7.56611 9.7106 7.61657 9.58878C7.66703 9.46696 7.68023 9.33292 7.65451 9.2036C7.62878 9.07428 7.56529 8.95549 7.47206 8.86225C7.37882 8.76902 7.26003 8.70552 7.13071 8.6798C7.00139 8.65408 6.86735 8.66728 6.74553 8.71774C6.62371 8.7682 6.51959 8.85365 6.44634 8.96328C6.37308 9.07291 6.33398 9.2018 6.33398 9.33366C6.33398 9.51047 6.40422 9.68004 6.52925 9.80506C6.65427 9.93009 6.82384 10.0003 7.00065 10.0003ZM11.6673 2.00033H11.0007V1.33366C11.0007 1.15685 10.9304 0.987279 10.8054 0.862254C10.6804 0.73723 10.5108 0.666992 10.334 0.666992C10.1572 0.666992 9.9876 0.73723 9.86258 0.862254C9.73756 0.987279 9.66732 1.15685 9.66732 1.33366V2.00033H4.33398V1.33366C4.33398 1.15685 4.26375 0.987279 4.13872 0.862254C4.0137 0.73723 3.84413 0.666992 3.66732 0.666992C3.49051 0.666992 3.32094 0.73723 3.19591 0.862254C3.07089 0.987279 3.00065 1.15685 3.00065 1.33366V2.00033H2.33398C1.80355 2.00033 1.29484 2.21104 0.919771 2.58611C0.544698 2.96118 0.333984 3.46989 0.333984 4.00033V13.3337C0.333984 13.8641 0.544698 14.3728 0.919771 14.7479C1.29484 15.1229 1.80355 15.3337 2.33398 15.3337H11.6673C12.1978 15.3337 12.7065 15.1229 13.0815 14.7479C13.4566 14.3728 13.6673 13.8641 13.6673 13.3337V4.00033C13.6673 3.46989 13.4566 2.96118 13.0815 2.58611C12.7065 2.21104 12.1978 2.00033 11.6673 2.00033ZM12.334 13.3337C12.334 13.5105 12.2637 13.68 12.1387 13.8051C12.0137 13.9301 11.8441 14.0003 11.6673 14.0003H2.33398C2.15717 14.0003 1.9876 13.9301 1.86258 13.8051C1.73756 13.68 1.66732 13.5105 1.66732 13.3337V7.33366H12.334V13.3337ZM12.334 6.00033H1.66732V4.00033C1.66732 3.82351 1.73756 3.65395 1.86258 3.52892C1.9876 3.4039 2.15717 3.33366 2.33398 3.33366H3.00065V4.00033C3.00065 4.17714 3.07089 4.34671 3.19591 4.47173C3.32094 4.59675 3.49051 4.66699 3.66732 4.66699C3.84413 4.66699 4.0137 4.59675 4.13872 4.47173C4.26375 4.34671 4.33398 4.17714 4.33398 4.00033V3.33366H9.66732V4.00033C9.66732 4.17714 9.73756 4.34671 9.86258 4.47173C9.9876 4.59675 10.1572 4.66699 10.334 4.66699C10.5108 4.66699 10.6804 4.59675 10.8054 4.47173C10.9304 4.34671 11.0007 4.17714 11.0007 4.00033V3.33366H11.6673C11.8441 3.33366 12.0137 3.4039 12.1387 3.52892C12.2637 3.65395 12.334 3.82351 12.334 4.00033V6.00033ZM3.66732 10.0003C3.79917 10.0003 3.92807 9.96123 4.0377 9.88797C4.14733 9.81472 4.23278 9.7106 4.28324 9.58878C4.3337 9.46696 4.3469 9.33292 4.32117 9.2036C4.29545 9.07428 4.23196 8.95549 4.13872 8.86225C4.04549 8.76902 3.9267 8.70552 3.79738 8.6798C3.66806 8.65408 3.53401 8.66728 3.4122 8.71774C3.29038 8.7682 3.18626 8.85365 3.113 8.96328C3.03975 9.07291 3.00065 9.2018 3.00065 9.33366C3.00065 9.51047 3.07089 9.68004 3.19591 9.80506C3.32094 9.93009 3.49051 10.0003 3.66732 10.0003ZM3.66732 12.667C3.79917 12.667 3.92807 12.6279 4.0377 12.5546C4.14733 12.4814 4.23278 12.3773 4.28324 12.2554C4.3337 12.1336 4.3469 11.9996 4.32117 11.8703C4.29545 11.7409 4.23196 11.6222 4.13872 11.5289C4.04549 11.4357 3.9267 11.3722 3.79738 11.3465C3.66806 11.3207 3.53401 11.3339 3.4122 11.3844C3.29038 11.4349 3.18626 11.5203 3.113 11.6299C3.03975 11.7396 3.00065 11.8685 3.00065 12.0003C3.00065 12.1771 3.07089 12.3467 3.19591 12.4717C3.32094 12.5968 3.49051 12.667 3.66732 12.667Z"
                                                    fill="#9D9D9D"
                                                />
                                            </svg>

                                            <p class="text-gray-500">15/09/23</p>
                                            <p class=" text-gray-500">AT</p>
                                            <p class="text-gray-500">10:30 HRS</p>
                                        </div>
                                        <div className="flex py-1 gap-2  ">
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.47431 7.47374C10.1279 6.95951 10.605 6.25436 10.8391 5.45637C11.0733 4.65838 11.0529 3.80725 10.7808 3.02139C10.5087 2.23552 9.99848 1.554 9.32102 1.07165C8.64357 0.589288 7.83261 0.330078 7.00097 0.330078C6.16934 0.330078 5.35838 0.589288 4.68093 1.07165C4.00347 1.554 3.4932 2.23552 3.22112 3.02139C2.94903 3.80725 2.92865 4.65838 3.16282 5.45637C3.39698 6.25436 3.87405 6.95951 4.52764 7.47374C3.40769 7.92244 2.4305 8.66664 1.70024 9.62702C0.969973 10.5874 0.514016 11.7279 0.380974 12.9271C0.371344 13.0146 0.379052 13.1032 0.403658 13.1878C0.428264 13.2723 0.469286 13.3512 0.524382 13.42C0.635654 13.5587 0.797497 13.6476 0.974308 13.6671C1.15112 13.6865 1.32841 13.6349 1.46719 13.5237C1.60597 13.4124 1.69486 13.2506 1.71431 13.0737C1.8607 11.7705 2.4821 10.5669 3.45979 9.69294C4.43748 8.81892 5.70291 8.33576 7.01431 8.33576C8.32571 8.33576 9.59114 8.81892 10.5688 9.69294C11.5465 10.5669 12.1679 11.7705 12.3143 13.0737C12.3324 13.2376 12.4106 13.3888 12.5337 13.4984C12.6568 13.608 12.8162 13.6681 12.981 13.6671H13.0543C13.2291 13.647 13.3888 13.5586 13.4987 13.4212C13.6086 13.2839 13.6597 13.1086 13.641 12.9337C13.5073 11.7312 13.0489 10.5877 12.3149 9.62588C11.5809 8.66402 10.5989 7.92006 9.47431 7.47374ZM7.00097 7.00041C6.47356 7.00041 5.95799 6.84401 5.51945 6.55099C5.08092 6.25798 4.73913 5.8415 4.5373 5.35423C4.33546 4.86696 4.28265 4.33078 4.38555 3.8135C4.48844 3.29622 4.74242 2.82106 5.11536 2.44812C5.4883 2.07518 5.96345 1.82121 6.48073 1.71831C6.99802 1.61542 7.53419 1.66823 8.02146 1.87006C8.50873 2.0719 8.92521 2.41369 9.21823 2.85222C9.51124 3.29075 9.66764 3.80633 9.66764 4.33374C9.66764 5.04099 9.38669 5.71926 8.88659 6.21936C8.3865 6.71946 7.70822 7.00041 7.00097 7.00041Z"
                                                    fill="#9D9D9D"
                                                />
                                            </svg>
                                            <p class="text-gray-500">Person</p>
                                            <p class=" text-gray-500">1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-[85rem] px-6 py-10 sm:px-6 lg:px-8 lg: mx-auto">
                            <div class="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
                                <div class="lg:col-span-2">
                                    <div class="lg:pr-6 xl:pr-12">
                                        <p class="text-xl font-bold "> Leg 2</p>
                                    </div>
                                </div>

                                <div class="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-left-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-gray-700">
                                    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                                        <div className="">
                                            <p class="text-sm">
                                                Ilorin International Airport, (Nigeria) EGKB{" "}
                                            </p>
                                        </div>
                                        <div>
                                            <p class="text-xl ml-8">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="48"
                                                    viewBox="0 96 960 960"
                                                    width="48"
                                                >
                                                    <path d="m600 856-42-42 208-208H80v-60h686L558 338l42-42 280 280-280 280Z" />
                                                </svg>
                                            </p>
                                        </div>

                                        <div>
                                            <p class="text-sm  ">
                                                Nnamdi Aziorder-lastkiwe International Airport,
                                                (Nigeria) DNMM
                                            </p>
                                        </div>
                                        <div className="flex py-1 gap-2 col-span-2 ">
                                            <svg
                                                width="14"
                                                height="16"
                                                viewBox="0 0 14 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.00065 12.667C7.13251 12.667 7.2614 12.6279 7.37103 12.5546C7.48066 12.4814 7.56611 12.3773 7.61657 12.2554C7.66703 12.1336 7.68023 11.9996 7.65451 11.8703C7.62878 11.7409 7.56529 11.6222 7.47206 11.5289C7.37882 11.4357 7.26003 11.3722 7.13071 11.3465C7.00139 11.3207 6.86735 11.3339 6.74553 11.3844C6.62371 11.4349 6.51959 11.5203 6.44634 11.6299C6.37308 11.7396 6.33398 11.8685 6.33398 12.0003C6.33398 12.1771 6.40422 12.3467 6.52925 12.4717C6.65427 12.5968 6.82384 12.667 7.00065 12.667ZM10.334 12.667C10.4658 12.667 10.5947 12.6279 10.7044 12.5546C10.814 12.4814 10.8994 12.3773 10.9499 12.2554C11.0004 12.1336 11.0136 11.9996 10.9878 11.8703C10.9621 11.7409 10.8986 11.6222 10.8054 11.5289C10.7122 11.4357 10.5934 11.3722 10.464 11.3465C10.3347 11.3207 10.2007 11.3339 10.0789 11.3844C9.95705 11.4349 9.85293 11.5203 9.77967 11.6299C9.70642 11.7396 9.66732 11.8685 9.66732 12.0003C9.66732 12.1771 9.73756 12.3467 9.86258 12.4717C9.9876 12.5968 10.1572 12.667 10.334 12.667ZM10.334 10.0003C10.4658 10.0003 10.5947 9.96123 10.7044 9.88797C10.814 9.81472 10.8994 9.7106 10.9499 9.58878C11.0004 9.46696 11.0136 9.33292 10.9878 9.2036C10.9621 9.07428 10.8986 8.95549 10.8054 8.86225C10.7122 8.76902 10.5934 8.70552 10.464 8.6798C10.3347 8.65408 10.2007 8.66728 10.0789 8.71774C9.95705 8.7682 9.85293 8.85365 9.77967 8.96328C9.70642 9.07291 9.66732 9.2018 9.66732 9.33366C9.66732 9.51047 9.73756 9.68004 9.86258 9.80506C9.9876 9.93009 10.1572 10.0003 10.334 10.0003ZM7.00065 10.0003C7.13251 10.0003 7.2614 9.96123 7.37103 9.88797C7.48066 9.81472 7.56611 9.7106 7.61657 9.58878C7.66703 9.46696 7.68023 9.33292 7.65451 9.2036C7.62878 9.07428 7.56529 8.95549 7.47206 8.86225C7.37882 8.76902 7.26003 8.70552 7.13071 8.6798C7.00139 8.65408 6.86735 8.66728 6.74553 8.71774C6.62371 8.7682 6.51959 8.85365 6.44634 8.96328C6.37308 9.07291 6.33398 9.2018 6.33398 9.33366C6.33398 9.51047 6.40422 9.68004 6.52925 9.80506C6.65427 9.93009 6.82384 10.0003 7.00065 10.0003ZM11.6673 2.00033H11.0007V1.33366C11.0007 1.15685 10.9304 0.987279 10.8054 0.862254C10.6804 0.73723 10.5108 0.666992 10.334 0.666992C10.1572 0.666992 9.9876 0.73723 9.86258 0.862254C9.73756 0.987279 9.66732 1.15685 9.66732 1.33366V2.00033H4.33398V1.33366C4.33398 1.15685 4.26375 0.987279 4.13872 0.862254C4.0137 0.73723 3.84413 0.666992 3.66732 0.666992C3.49051 0.666992 3.32094 0.73723 3.19591 0.862254C3.07089 0.987279 3.00065 1.15685 3.00065 1.33366V2.00033H2.33398C1.80355 2.00033 1.29484 2.21104 0.919771 2.58611C0.544698 2.96118 0.333984 3.46989 0.333984 4.00033V13.3337C0.333984 13.8641 0.544698 14.3728 0.919771 14.7479C1.29484 15.1229 1.80355 15.3337 2.33398 15.3337H11.6673C12.1978 15.3337 12.7065 15.1229 13.0815 14.7479C13.4566 14.3728 13.6673 13.8641 13.6673 13.3337V4.00033C13.6673 3.46989 13.4566 2.96118 13.0815 2.58611C12.7065 2.21104 12.1978 2.00033 11.6673 2.00033ZM12.334 13.3337C12.334 13.5105 12.2637 13.68 12.1387 13.8051C12.0137 13.9301 11.8441 14.0003 11.6673 14.0003H2.33398C2.15717 14.0003 1.9876 13.9301 1.86258 13.8051C1.73756 13.68 1.66732 13.5105 1.66732 13.3337V7.33366H12.334V13.3337ZM12.334 6.00033H1.66732V4.00033C1.66732 3.82351 1.73756 3.65395 1.86258 3.52892C1.9876 3.4039 2.15717 3.33366 2.33398 3.33366H3.00065V4.00033C3.00065 4.17714 3.07089 4.34671 3.19591 4.47173C3.32094 4.59675 3.49051 4.66699 3.66732 4.66699C3.84413 4.66699 4.0137 4.59675 4.13872 4.47173C4.26375 4.34671 4.33398 4.17714 4.33398 4.00033V3.33366H9.66732V4.00033C9.66732 4.17714 9.73756 4.34671 9.86258 4.47173C9.9876 4.59675 10.1572 4.66699 10.334 4.66699C10.5108 4.66699 10.6804 4.59675 10.8054 4.47173C10.9304 4.34671 11.0007 4.17714 11.0007 4.00033V3.33366H11.6673C11.8441 3.33366 12.0137 3.4039 12.1387 3.52892C12.2637 3.65395 12.334 3.82351 12.334 4.00033V6.00033ZM3.66732 10.0003C3.79917 10.0003 3.92807 9.96123 4.0377 9.88797C4.14733 9.81472 4.23278 9.7106 4.28324 9.58878C4.3337 9.46696 4.3469 9.33292 4.32117 9.2036C4.29545 9.07428 4.23196 8.95549 4.13872 8.86225C4.04549 8.76902 3.9267 8.70552 3.79738 8.6798C3.66806 8.65408 3.53401 8.66728 3.4122 8.71774C3.29038 8.7682 3.18626 8.85365 3.113 8.96328C3.03975 9.07291 3.00065 9.2018 3.00065 9.33366C3.00065 9.51047 3.07089 9.68004 3.19591 9.80506C3.32094 9.93009 3.49051 10.0003 3.66732 10.0003ZM3.66732 12.667C3.79917 12.667 3.92807 12.6279 4.0377 12.5546C4.14733 12.4814 4.23278 12.3773 4.28324 12.2554C4.3337 12.1336 4.3469 11.9996 4.32117 11.8703C4.29545 11.7409 4.23196 11.6222 4.13872 11.5289C4.04549 11.4357 3.9267 11.3722 3.79738 11.3465C3.66806 11.3207 3.53401 11.3339 3.4122 11.3844C3.29038 11.4349 3.18626 11.5203 3.113 11.6299C3.03975 11.7396 3.00065 11.8685 3.00065 12.0003C3.00065 12.1771 3.07089 12.3467 3.19591 12.4717C3.32094 12.5968 3.49051 12.667 3.66732 12.667Z"
                                                    fill="#9D9D9D"
                                                />
                                            </svg>

                                            <p class="text-gray-500">28/09/23</p>
                                            <p class=" text-gray-500">AT</p>
                                            <p class="text-gray-500">11:30 HRS</p>
                                        </div>
                                        <div className="flex py-1 gap-2  ">
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.47431 7.47374C10.1279 6.95951 10.605 6.25436 10.8391 5.45637C11.0733 4.65838 11.0529 3.80725 10.7808 3.02139C10.5087 2.23552 9.99848 1.554 9.32102 1.07165C8.64357 0.589288 7.83261 0.330078 7.00097 0.330078C6.16934 0.330078 5.35838 0.589288 4.68093 1.07165C4.00347 1.554 3.4932 2.23552 3.22112 3.02139C2.94903 3.80725 2.92865 4.65838 3.16282 5.45637C3.39698 6.25436 3.87405 6.95951 4.52764 7.47374C3.40769 7.92244 2.4305 8.66664 1.70024 9.62702C0.969973 10.5874 0.514016 11.7279 0.380974 12.9271C0.371344 13.0146 0.379052 13.1032 0.403658 13.1878C0.428264 13.2723 0.469286 13.3512 0.524382 13.42C0.635654 13.5587 0.797497 13.6476 0.974308 13.6671C1.15112 13.6865 1.32841 13.6349 1.46719 13.5237C1.60597 13.4124 1.69486 13.2506 1.71431 13.0737C1.8607 11.7705 2.4821 10.5669 3.45979 9.69294C4.43748 8.81892 5.70291 8.33576 7.01431 8.33576C8.32571 8.33576 9.59114 8.81892 10.5688 9.69294C11.5465 10.5669 12.1679 11.7705 12.3143 13.0737C12.3324 13.2376 12.4106 13.3888 12.5337 13.4984C12.6568 13.608 12.8162 13.6681 12.981 13.6671H13.0543C13.2291 13.647 13.3888 13.5586 13.4987 13.4212C13.6086 13.2839 13.6597 13.1086 13.641 12.9337C13.5073 11.7312 13.0489 10.5877 12.3149 9.62588C11.5809 8.66402 10.5989 7.92006 9.47431 7.47374ZM7.00097 7.00041C6.47356 7.00041 5.95799 6.84401 5.51945 6.55099C5.08092 6.25798 4.73913 5.8415 4.5373 5.35423C4.33546 4.86696 4.28265 4.33078 4.38555 3.8135C4.48844 3.29622 4.74242 2.82106 5.11536 2.44812C5.4883 2.07518 5.96345 1.82121 6.48073 1.71831C6.99802 1.61542 7.53419 1.66823 8.02146 1.87006C8.50873 2.0719 8.92521 2.41369 9.21823 2.85222C9.51124 3.29075 9.66764 3.80633 9.66764 4.33374C9.66764 5.04099 9.38669 5.71926 8.88659 6.21936C8.3865 6.71946 7.70822 7.00041 7.00097 7.00041Z"
                                                    fill="#9D9D9D"
                                                />
                                            </svg>
                                            <p class="text-gray-500">Person</p>
                                            <p class=" text-gray-500">1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="bg-[#EDCADC] mt-3">
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div className="px-1 m-1 text-xs text-gray-700 md:text-sm lg:text-sm ">
                                    Things not to bring or do onboard the aircraft without prior permission from Tron Aviation Limited
                                </div>
                            </div>
                        </section>
                        <section className=" m-4 text-gray-500">
                            <div>Some items may endanger the safety of an aircraft or persons on board it.
                                JETTLY's policy on restricted and prohibited items may vary from Operator to Operator.
                                Travelers are urged to check with their Aviation Advisor before traveling with any items of potential concern including,
                                but not limited to, paint, poisons, radioactive materials, firearms and ammunition, explosives, defense/incapacitating spray,
                                corrosive and oxidizing materials, compressed gas/cylinders, avalanche rescue backpacks, air purifiers and ionizers.</div>
                        </section>
                        <div class="max-w-[50rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                            <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
                                <div class="text-center">
                                    {/* <div class="flex justify-center items-center w-12 h-12 bg-white border border-red-500 !important rounded-full mx-auto">
                                        <img alt="" src={smoking} />
                                    </div> */}
                                    <div class="mt-3">
                                        <h3 class="text-sm text-gray-900">Smoking</h3>

                                    </div>
                                </div>

                                <div class="text-center">
                                    {/* <div class="flex justify-center items-center w-12 h-12 bg-white border border-gray-200 rounded-full mx-auto ">
                                        <img alt="" src={weapon} />
                                    </div> */}
                                    <div class="mt-3">
                                        <h3 class="text-sm  text-gray-900 ">Weapon</h3>

                                    </div>
                                </div>
                                <div class="text-center">
                                    {/* <div class="flex justify-center items-center w-12 h-12 bg-white border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
                                        <img alt="" src={sharpobject} />
                                    </div> */}
                                    <div class="mt-3">
                                        <h3 class="text-sm text-gray-900 ">Sharp Object</h3>

                                    </div>
                                </div>
                                <div class="text-center">
                                    {/* <div class="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
                                        <img alt="" src={flameable} />
                                    </div> */}
                                    <div class="mt-3">
                                        <h3 class="text-sm text-gray-900 ">Flammable Liquid Over 100ml</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="group flex flex-col h-full bg-white rounded-xl border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    {/* <div class="h-30 flex flex-col justify-center items-center rounded-lg">
                        <img
                            alt=""
                            src={privatejet}
                            className="rounded-t-lg object-cover object-center w-full rounded-t-md h-28 dark:bg-gray-500"
                        />
                    </div> */}
                    <div class="p-4 md:p-6">
                        <span class="block mb-1 text-xl font-semibold uppercase ">
                            Beech BE200 Super King Air
                        </span>
                        <section className="">
                            <div class=" grid gap-3 grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-3">
                                <div>
                                    <p class="mt-2 sm:mt-3 text-sm sm:text-sm  ">Tron Aviation</p>
                                </div>
                                <div>
                                    <p class="mt-2 sm:mt-3 text-sm sm:text-sm"><svg width="90" height="20" viewBox="0 0 152 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0L16.2321 6.17508L23.4127 8.2918L18.8476 14.2249L19.0534 21.7082L12 19.2L4.94658 21.7082L5.15239 14.2249L0.587322 8.2918L7.76795 6.17508L12 0Z" fill="#F4DA82" />
                                        <path d="M44 0L48.2321 6.17508L55.4127 8.2918L50.8476 14.2249L51.0534 21.7082L44 19.2L36.9466 21.7082L37.1524 14.2249L32.5873 8.2918L39.7679 6.17508L44 0Z" fill="#F4DA82" />
                                        <path d="M76 0L80.2321 6.17508L87.4127 8.2918L82.8476 14.2249L83.0534 21.7082L76 19.2L68.9466 21.7082L69.1524 14.2249L64.5873 8.2918L71.7679 6.17508L76 0Z" fill="#F4DA82" />
                                        <path d="M108 0L112.232 6.17508L119.413 8.2918L114.848 14.2249L115.053 21.7082L108 19.2L100.947 21.7082L101.152 14.2249L96.5873 8.2918L103.768 6.17508L108 0Z" fill="#F4DA82" />
                                        <path d="M140 0L144.232 6.17508L151.413 8.2918L146.848 14.2249L147.053 21.7082L140 19.2L132.947 21.7082L133.152 14.2249L128.587 8.2918L135.768 6.17508L140 0Z" fill="#F4DA82" />
                                    </svg></p>
                                </div>
                                <div>
                                    <p class="mt-2 sm:mt-3 text-sm sm:text-sm ">15 Reviews</p>
                                </div>
                            </div>
                        </section>

                        <section>

                            <div class="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0 ">

                                <ul role="list" class="space-y-2 text-sm sm:text-base ">
                                    <li class="flex space-x-3">
                                        <span class="text-gray-900 dark:text-gray-500">
                                            Charter Price
                                        </span>
                                    </li>

                                    <li class="flex space-x-3">

                                        <span class="text-gray-800 dark:text-gray-500">
                                            Service Fee
                                        </span>
                                    </li>

                                    <li class="flex space-x-3">

                                        <span class="text-gray-800 dark:text-gray-500">
                                            Taxes And Fees
                                        </span>
                                    </li>

                                    <li class="flex space-x-3">

                                        <span class="text-gray-00 dark:text-gray-500">
                                            Total
                                        </span>
                                    </li>
                                </ul>

                                <ul role="list" class="space-y-2 text-sm sm:text-base">
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 h-6 w-3 text-gray-500" width='10' height='10' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.09 122.88"><title>nigeria-naira</title><path d="M13.42,0H32.1a1.25,1.25,0,0,1,1,.6L58,42.26H83.17v-41A1.23,1.23,0,0,1,84.39,0h17.28a1.23,1.23,0,0,1,1.23,1.23v41h11a1.23,1.23,0,0,1,1.23,1.23V54.55a1.23,1.23,0,0,1-1.23,1.23h-11v9.41h11a1.23,1.23,0,0,1,1.23,1.22V77.48a1.23,1.23,0,0,1-1.23,1.22h-11v43a1.23,1.23,0,0,1-1.23,1.23H84.39a1.25,1.25,0,0,1-1-.6L58,78.7H33.26v43A1.23,1.23,0,0,1,32,122.88H13.42a1.23,1.23,0,0,1-1.23-1.23V78.7h-11A1.23,1.23,0,0,1,0,77.48V66.41a1.23,1.23,0,0,1,1.23-1.22h11V55.78h-11A1.23,1.23,0,0,1,0,54.55V43.49a1.23,1.23,0,0,1,1.23-1.23h11v-41A1.23,1.23,0,0,1,13.42,0ZM33.26,55.78v9.41h17l-4.4-9.41ZM70,65.19H83.17V55.78H65.68L70,65.19ZM83.17,78.7H77.88l5.29,11v-11ZM33.26,32.76v9.5h4.57l-4.57-9.5Z" /></svg>
                                        <span class="text-rose-800 dark:text-rose-800">
                                            150,000
                                        </span>
                                    </li>

                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 h-6 w-3 text-gray-500" width='10' height='10' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.09 122.88"><title>nigeria-naira</title><path d="M13.42,0H32.1a1.25,1.25,0,0,1,1,.6L58,42.26H83.17v-41A1.23,1.23,0,0,1,84.39,0h17.28a1.23,1.23,0,0,1,1.23,1.23v41h11a1.23,1.23,0,0,1,1.23,1.23V54.55a1.23,1.23,0,0,1-1.23,1.23h-11v9.41h11a1.23,1.23,0,0,1,1.23,1.22V77.48a1.23,1.23,0,0,1-1.23,1.22h-11v43a1.23,1.23,0,0,1-1.23,1.23H84.39a1.25,1.25,0,0,1-1-.6L58,78.7H33.26v43A1.23,1.23,0,0,1,32,122.88H13.42a1.23,1.23,0,0,1-1.23-1.23V78.7h-11A1.23,1.23,0,0,1,0,77.48V66.41a1.23,1.23,0,0,1,1.23-1.22h11V55.78h-11A1.23,1.23,0,0,1,0,54.55V43.49a1.23,1.23,0,0,1,1.23-1.23h11v-41A1.23,1.23,0,0,1,13.42,0ZM33.26,55.78v9.41h17l-4.4-9.41ZM70,65.19H83.17V55.78H65.68L70,65.19ZM83.17,78.7H77.88l5.29,11v-11ZM33.26,32.76v9.5h4.57l-4.57-9.5Z" /></svg>
                                        <span class="text-rose-800 dark:text-rose-800">
                                            1020,000
                                        </span>
                                    </li>

                                    <li class="flex space-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="13"><path d="M480 976q-85 0-158-30.5T195 861q-54-54-84.5-127T80 576q0-84 30.5-157T195 292q54-54 127-85t158-31q75 0 140 24t117 66l-43 43q-44-35-98-54t-116-19q-145 0-242.5 97.5T140 576q0 145 97.5 242.5T480 916q37 0 71.5-7t66.5-21l45 46q-41 20-87 31t-96 11Zm290-90V766H650v-60h120V586h60v120h120v60H830v120h-60ZM421 758 256 592l45-45 120 120 414-414 46 45-460 460Z" /></svg>
                                        <span class="text-rose-800 dark:text-rose-800">
                                            Included
                                        </span>
                                    </li>
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 h-6 w-3 text-gray-500" width='10' height='10' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.09 122.88"><title>nigeria-naira</title><path d="M13.42,0H32.1a1.25,1.25,0,0,1,1,.6L58,42.26H83.17v-41A1.23,1.23,0,0,1,84.39,0h17.28a1.23,1.23,0,0,1,1.23,1.23v41h11a1.23,1.23,0,0,1,1.23,1.23V54.55a1.23,1.23,0,0,1-1.23,1.23h-11v9.41h11a1.23,1.23,0,0,1,1.23,1.22V77.48a1.23,1.23,0,0,1-1.23,1.22h-11v43a1.23,1.23,0,0,1-1.23,1.23H84.39a1.25,1.25,0,0,1-1-.6L58,78.7H33.26v43A1.23,1.23,0,0,1,32,122.88H13.42a1.23,1.23,0,0,1-1.23-1.23V78.7h-11A1.23,1.23,0,0,1,0,77.48V66.41a1.23,1.23,0,0,1,1.23-1.22h11V55.78h-11A1.23,1.23,0,0,1,0,54.55V43.49a1.23,1.23,0,0,1,1.23-1.23h11v-41A1.23,1.23,0,0,1,13.42,0ZM33.26,55.78v9.41h17l-4.4-9.41ZM70,65.19H83.17V55.78H65.68L70,65.19ZM83.17,78.7H77.88l5.29,11v-11ZM33.26,32.76v9.5h4.57l-4.57-9.5Z" /></svg>
                                        <span class="text-rose-800 dark:text-rose-800">
                                            170,000
                                        </span>
                                    </li>
                                </ul>

                            </div>
                        </section>

                    </div>
                    <div class="border-t p-3 border-gray-200 divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <h1 className="text-xl ">Safe And Secure</h1>
                        <p className="">Get a refund within 24 hrs of the time of Cancellation</p>
                    </div>
                    <div class="border-t p-3 border-gray-200 divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                        <h1 className="text-xl ">Terms of service</h1>
                        <p className="mt-3 ">The Flight Quote listed above is an estimate and is not guaranteed until we confirms pricing and availability with Tron Aviation Limited on your behalf. After we receive your request we will contact you to discuss any special requirements and provide you with a final flight price for this aircraft and payment options, at which time you can choose to confirm the booking.

                            If this aircraft is not available on your dates of travel, our Aviation expert will provide you with a number of comparable alternatives for this flight.

                            For the avoidance of doubt this is a fully cancelable request and you will incur no charges prior to finalizing the booking.</p>
                    </div>
                    <div class="flex px-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                        <div class="ml-3 sm:ml-8">
                            <p class="mt-1 text-gray-600 dark:text-gray-400">
                            By submitting your flight request, you are agree to our 
                            <span className="text-rose-900 font-semibold"> Terms & Conditions & Privacy Policy</span> and to receive further communications regarding your flight.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="grid">
          <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-rose-900 text-white hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-rose-900 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4">Continue</button>
        </div>
            </div>
           
        </div>
    );
};

export default BookingCards;
