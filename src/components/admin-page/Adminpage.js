import React, { useContext } from "react";
import "./assets/css/style.css"
import Navigation from "./assets/js/Naviagation";
import { SummaryContext } from "../../context/admin-context";




const Fleet = () => {
    const { summary } = useContext(SummaryContext);
    return (
 
        <div class="container">
        <div class="navigation">
            <Navigation/>
        </div>
        <div class="main">
            <div class="topbar">
                <div class="">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div class="search">
                    <label>
                    <div class="relative text-gray-600">
                <input type="search" name="search" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" /></svg>
                </button>
              </div>
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                </div>

                <div class="user">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80" alt=""/>
                </div>
            </div>
            <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers">{summary?.bookings_total}</div>
                        <div class="cardName">Bookings</div>
                    </div>

                   
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">{summary?.flight_total}</div>
                        <div class="cardName">Flights</div>
                    </div>

                   
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">{summary?.aircrafts_total}</div>
                        <div class="cardName">Aircrafts</div>
                    </div>

                    
                </div>

                <div class="card">
                    <div>
                        <div class="numbers">{summary?.admins_total}</div>
                        <div class="cardName">Admins</div>
                    </div>


                  
                </div>
                <div class="card">
                    <div>
                        <div class="numbers">{summary?.users_total}</div>
                        <div class="cardName">Users</div>
                    </div>
                </div>
            </div>
            <div class="container px-4 mx-auto">

</div>
    
            
        </div>
    </div>      
   
                                                           

    );
};

export default Fleet;
