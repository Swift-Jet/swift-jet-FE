import React, { useState } from "react";
import Logoprimary from "../imgs/logoprimary.png"
import {Link} from "react-router-dom";



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
                    <Link to="/aircraft">
                    <span class="icon">
                            <ion-icon name="logo-apple"></ion-icon>
                        </span>
                        <span class="title">Swift Jet</span>
                    </Link>
                </li>

                <li className={hoveredItem === 2 ? "hovered" : ""} onMouseOver={() => handleMouseOver(2)}>
                    <a href="/Adminspage">
                        <span class="icon ">
                        <svg  className="m-3 w-6 h-6 " xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm0 60q-24.75 0-42.375-17.625T160 876V486q0-14.25 6.375-27T184 438l260-195q8.295-6 17.344-9 9.049-3 18.853-3 9.803 0 18.717 3 8.915 3 17.086 9l260 195q11.25 8.25 17.625 21T800 486v390q0 24.75-17.625 42.375T740 936H530V686H430v250H220Zm260-353Z"/></svg>
                        </span>
                        <span class="title">Dashboard</span>
                    </a>
                </li>

                <li className={hoveredItem === 3 ? "hovered" : ""} onMouseOver={() => handleMouseOver(3)}>
                    <Link to ="/Flight">
                        <span class="icon">
                        <svg className="m-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M651 952q-4 0-7-2t-5-5L539 776H413q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5h126l100-169q2-3 5.5-5t7.5-2q7 0 10 4.5t1 11.5l-47 160h132l26-35q2-2 5-3.5t5-1.5q7 0 10 4.5t1 10.5l-16 55 16 55q2 6-1 10.5t-10 4.5q-2 0-5-1.5t-5-3.5l-26-35H616l47 160q2 7-1.5 11.5T651 952ZM308 612q-7 0-10-4.5t-1-11.5l47-160H212l-26 35q-2 2-5 3.5t-5 1.5q-7 0-10-4.5t-1-10.5l16-55-16-55q-2-6 1-10.5t10-4.5q2 0 5 1.5t5 3.5l26 35h132l-47-160q-2-7 1.5-11.5T309 200q4 0 7 2t5 5l100 169h126q13 0 21.5 8.5T577 406q0 12-8.5 21t-21.5 9H421L321 605q-2 3-5.5 5t-7.5 2Z"/></svg>
                        </span>
                        <span class="title">Aircarft</span>
                    </Link>
                </li>

                <li className={hoveredItem === 4 ? "hovered" : ""} onMouseOver={() => handleMouseOver(4)}>
                    <a href="#">
                        <span class="icon">
                        <svg className="m-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M299.825 694Q287 694 278.5 685.375T270 664v-15h-80q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190 589h190V484H191q-12 0-21.5-8.912Q160 466.175 160 453V289q0-12.75 9-21.375T190 259h80v-15q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T330 244v15h80q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T410 319H220v105h189q13.175 0 22.087 8.5Q440 441 440 455v164q0 12-8.625 21T410 649h-80v15q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm258.042 228Q552 922 547 920q-5-2-10-7L409 785q-9-9-9-21t9-21q9-9 21-9t21 9l107 107 219-219q9-9 21-9t21 9q9 9 9 21t-9 21L579 913q-5 5-10.133 7-5.134 2-11 2Z"/></svg>
                        </span>
                        <span class="title">Deals</span>
                    </a>
                </li>

                <li className={hoveredItem === 5 ? "hovered" : ""} onMouseOver={() => handleMouseOver(5)}>
                    <a href="#">
                        <span class="icon">
                        <svg className="m-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h434q-3 15-4 30t1 30H140v520h680V476q16.794-4.783 31.397-13.391Q866 454 880 443v393q0 24-18 42t-42 18H140Zm0-580v520-520Zm619.882 90Q714 406 682 373.882q-32-32.117-32-78Q650 250 682.118 218q32.117-32 78-32Q806 186 838 218.118q32 32.117 32 78Q870 342 837.882 374q-32.117 32-78 32ZM480 534l151-98q10 9 21 16.673 11 7.673 23 13.327L496 583q-7.5 5-15.75 5T464 583L140 375v-59l340 218Z"/></svg>
                        </span>
                        <span class="title">Messages</span>
                    </a>
                </li>

                <li className={hoveredItem === 6 ? "hovered" : ""} onMouseOver={() => handleMouseOver(6)}>
                    <a href="#">
                        <span class="icon">
                        <svg className="m-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M546 976H414q-11 0-19.5-7T384 951l-16-101q-19-7-40-19t-37-25l-93 43q-11 5-22 1.5T159 836L93 719q-6-10-3-21t12-18l86-63q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535l-86-63q-9-7-12-18t3-21l66-117q6-11 17-14.5t22 1.5l93 43q16-13 37-25t40-18l16-102q2-11 10.5-18t19.5-7h132q11 0 19.5 7t10.5 18l16 101q19 7 40.5 18.5T669 346l93-43q11-5 22-1.5t17 14.5l66 116q6 10 3.5 21.5T858 472l-86 61q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l86 62q9 7 12 18t-3 21l-66 117q-6 11-17 14.5t-22-1.5l-93-43q-16 13-36.5 25.5T592 850l-16 101q-2 11-10.5 18t-19.5 7Zm-66-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410 576q0-29 20.5-49.5T480 506q29 0 49.5 20.5T550 576q0 29-20.5 49.5T480 646Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715 576q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538 348l-14-112h-88l-14 112q-34 7-63.5 24T306 414l-106-46-40 72 94 69q-4 17-6.5 33.5T245 576q0 17 2.5 33.5T254 643l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z"/></svg>
                        </span>
                        <span class="title">Settings</span>
                    </a>
                </li>

                <li className={hoveredItem === 7 ? "hovered" : ""} onMouseOver={() => handleMouseOver(7)}>
                    <a href="#">
                        <span class="icon">
                        <svg className="m-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M400 571q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM110 892q-13 0-21.5-8.5T80 862v-64q0-35 17.5-63t50.5-43q72-32 133.5-46T400 632h23q-6 14-9 27.5t-5 32.5h-9q-58 0-113.5 12.5T172 746q-16 8-24 22.5t-8 29.5v34h269q5 18 12 32.5t17 27.5H110Zm290-381q39 0 64.5-25.5T490 421q0-39-25.5-64.5T400 331q-39 0-64.5 25.5T310 421q0 39 25.5 64.5T400 511Zm0-90Zm9 411Zm285-17q33 0 56.5-23.5T774 735q0-33-23.5-56.5T694 655q-33 0-56.5 23.5T614 735q0 33 23.5 56.5T694 815Zm-37 55q-17-5-34.5-14.5T593 834l-44 10q-5 2-10 0t-7-7l-13-23q-3-4-2-9t5-9l38-36q-2-9-2-25t2-25l-38-36q-4-4-5-9t2-9l13-23q2-5 7-7t10 0l44 10q12-12 29.5-21.5T657 600l8-53q1-6 5-9.5t10-3.5h28q6 0 10 3.5t5 9.5l8 53q17 5 34.5 14.5T795 636l44-10q5-2 10 0t7 7l13 23q3 4 2 9t-5 9l-38 36q2 9 2 25t-2 25l38 36q4 4 5 9t-2 9l-13 23q-2 5-7 7t-10 0l-44-10q-12 12-29.5 21.5T731 870l-8 53q-1 6-5 9.5t-10 3.5h-28q-6 0-10-3.5t-5-9.5l-8-53Z"/></svg>
                        </span>
                        <span class="title">User</span>
                    </a>
                </li>

                <li className={hoveredItem === 8 ? "hovered" : ""} onMouseOver={() => handleMouseOver(8)}>
                    <a href="/signInlayout">
                        <span class="icon">
                        <svg className="m-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M645 729q-9-9-9-21.75t9-21.25l80-80H405q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T405 546h318l-81-81q-8-8-8-20.447 0-12.448 9.214-21.5Q651.661 414 664.33 414q12.67 0 21.67 9l133 133q5 5 7 10.133 2 5.134 2 11Q828 583 826 588q-2 5-7 10L687 730q-8 8-20.5 8t-21.5-9ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h261q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T441 276H180v600h261q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T441 936H180Z"/></svg>
                        </span>
                        <span class="title">Sign Out</span>
                    </a>
                </li>
            </ul>
            <button className="toggle" onClick={handleToggleClick}><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M190 546q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190 486h580q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770 546H190Zm0 120q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190 606h580q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770 666H190Z"/></svg></button>
    </div>
  );
}

export default Navigation;
