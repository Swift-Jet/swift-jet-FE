import React, { useState } from "react";
import { IoIosHome,IoIosMenu } from "react-icons/io";
import Logoprimary from "../imgs/logoprimary.png"


function Navigation() {
  const [hoveredItem, setHoveredItem] = useState(null);

  function handleMouseOver(item) {
    setHoveredItem(item);
  }

  function handleToggleClick() {
    const navigation = document.querySelector(".navigation");
    const main = document.querySelector(".main");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }

  return (
    <div>
      <ul className="navigation">
                <li className={hoveredItem === 1 ? "hovered" : ""} onMouseOver={() => handleMouseOver(1)} >
                    <a href="#">
                    <span class="icon">
                            <ion-icon name="logo-apple"></ion-icon>
                        </span>
                        <span class="title">Brand Name</span>
                    </a>
                </li>

                <li className={hoveredItem === 2 ? "hovered" : ""} onMouseOver={() => handleMouseOver(2)}>
                    <a href="#">
                        <span class="icon">
                        
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>

                <li className={hoveredItem === 3 ? "hovered" : ""} onMouseOver={() => handleMouseOver(3)}>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title">Customers</span>
                    </a>
                </li>

                <li className={hoveredItem === 4 ? "hovered" : ""} onMouseOver={() => handleMouseOver(4)}>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span class="title">Messages</span>
                    </a>
                </li>

                <li className={hoveredItem === 5 ? "hovered" : ""} onMouseOver={() => handleMouseOver(5)}>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <span class="title">Help</span>
                    </a>
                </li>

                <li className={hoveredItem === 6 ? "hovered" : ""} onMouseOver={() => handleMouseOver(6)}>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span class="title">Settings</span>
                    </a>
                </li>

                <li className={hoveredItem === 7 ? "hovered" : ""} onMouseOver={() => handleMouseOver(7)}>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </span>
                        <span class="title">Password</span>
                    </a>
                </li>

                <li className={hoveredItem === 8 ? "hovered" : ""} onMouseOver={() => handleMouseOver(8)}>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span class="title">Sign Out</span>
                    </a>
                </li>
            </ul>
            <button className="toggle" onClick={handleToggleClick}><IoIosMenu/></button>
    </div>
  );
}

export default Navigation;
