import React from 'react';
import logoprimary from '../image/logoprimary.png';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';






function NavBar() {

  let Links = [
      {name:"Flight", link:"/"},
      {name:"Aircrafts", link:"/"},
      {name:"Destinations", link:"/"},
      {name:"Get a Quote", link:"/"},
      {name:"Blog", link:"/"},
  ]

  return (
  <div className="shadow-md  w-full fixed  top-[0px] left-[0px] font-[Poppins] ">
    <div className="md:flex item-center justify-between bg-white py-4 md:px-10 px-7 sm:px-5 px-3">
      <div className="font-bold text-sm cursor-pointer flex items-center font-[Poppins] text-rose-900">
      <img alt=""src={logoprimary}  className=" ml-10 pt-2"/>
      </div>
      <ul className='md:flex lg:items-center gap-6 md:pb-0 pb-12 absolute sm:static' >
          {
            Links.map((link)=>(
              <li key={link.name} className='md:relative group hover:text-rose-900 md:my-0 my-7'>
                <a href='{link.link}'>{link.name}</a>
                <span className="absolute -bottom-1 right-0 w-0 h-1 bg-rose-900 group-hover:w-full group-hover:transition-all "></span>
              </li>
              
            ))
          }
          <li className=" md:block relative box-border w-0.5 h-[50px] border-r-[2px] border-solid border-rose-900 " ></li>
          <li><div className="relative">Talk To Our Team</div>
            <div className="relative text-sm font-medium">
              +234 707 8965 234
            </div>
          </li>
       
          <button class="text-rose-900 border-2 item-center border-rose-900 hover:bg-rose-900 hover:text-white active:bg-rose-900 font-bold  px-6 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 sm: px-3 py-1 md:block"  type="button">
          <ArrowCircleLeftOutlinedIcon /> Sign In
          </button>
          <button class="  text-rose-900 border-2 border-rose-900 hover:bg-rose-900 hover:text-white active:bg-rose-900 font-bold  px-6 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150- sm: px-3 py-1 md:block" type="button" >
          <PersonAddAltOutlinedIcon  /> Register
          </button>
          
    </ul>
    
   </div> 
   </div>
  )
}

export default NavBar