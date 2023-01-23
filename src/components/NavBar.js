import React from 'react';
import logoprimary from '../image/logoprimary.png'


function NavBar() {
  return (
    <div className="absolute top-[0px] left-[0px] bg-white1 w-[1440px] h-[98px] flex flex-row py-0 px-14 box-border items-center justify-between text-base font-body-normal-regular1">
    <img
      className="w-[200px] h-[57px] shrink-0 object-cover"
      alt=""
      src={logoprimary}
    />
    <div className="flex flex-row items-center justify-start gap-[48px]">
      <div className="flex flex-row items-start justify-center gap-[24px]">
        <div className="flex flex-col items-start justify-center gap-[4px] text-primary-color1">
          <div className="relative font-medium">Flights</div>
          <div className="self-stretch relative bg-primary-color1 h-1 shrink-0" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="relative">Aircrafts</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="relative">Destinations</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="relative">Get a Quote</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[8px] text-black">
        <div className="relative box-border w-0.5 h-[63px] shrink-0 border-r-[2px] border-solid border-black-200" />
        <div className="flex flex-row items-center justify-start gap-[24px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="relative">Talk To Our Team</div>
            <div className="relative text-lg font-medium">
              +234 707 8965 234
            </div>
          </div>
          <div className="rounded-small bg-primary-color1 h-9 flex flex-row py-0 px-6 box-border items-center justify-center gap-[8px] text-main-background1">
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../icn-login4.svg"
            />
            <div className="relative font-medium">Sign In</div>
          </div>
          <div className="rounded-small box-border h-[38px] flex flex-row py-0 px-6 items-center justify-center gap-[8px] text-primary-color1 border-[2px] border-solid border-primary-color1">
            <img
              className="relative w-6 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../icn--add-account.svg"
            />
            <div className="relative">Register</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar