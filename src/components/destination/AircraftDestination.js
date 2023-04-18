import React, { useContext } from "react";
import "./aircraft-destination.css";
import Card from "../shared/aircraft-type-card/card";
import AircraftSharedBanner from "../shared/aircraft-shared-banner/AircraftSharedBanner";
import {
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";

const teamData = [
  {
    img: "https://assets.radical.storage/luggage-storage/los-angeles/350x200.9443.webp",
    name: "London",
    position: "$4 / Bag",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
  {
    img: "https://assets.radical.storage/luggage-storage/chicago/350x200.7530.webp",
    name: "New York",
    position: "$4 / Bag",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
  {
    img: "https://assets.radical.storage/luggage-storage/paris/350x200.4556.webp",
    name: "Paris",
    position: "$4 / Bag",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
  {
    img: "https://assets.radical.storage/luggage-storage/amsterdam/350x200.1962.webp",
    name: "United Kingdom",
    position: "$4 / Bag",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
  {
    img: "https://assets.radical.storage/luggage-storage/rome/350x200.5136.webp",
    name: "England",
    position: "$4 / Bag",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
  {
    img: "https://assets.radical.storage/luggage-storage/los-angeles/350x200.9443.webp",
    name: "Manchester",
    position: "$4 / Bag",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
  {
    img: "https://assets.radical.storage/luggage-storage/boston/350x200.5347.webp",
    name: "Burginham",
    position: "$4 / Bag",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },
  
  {
    img: "https://assets.radical.storage/luggage-storage/edinburgh/350x200.2711.webp",
    name: "London",
    position: "$4 / Bag",
    socials: [
      {
        color: "light-blue",
        name: "twitter",
      },
      {
        color: "blue",
        name: "facebook",
      },
      {
        color: "pink",
        name: "dribbble",
      },
    ],
  },

];

const AircraftDestination = () => {
  return (
    <div className="font-[poppins] pt-8">
      {/* <AircraftSharedBanner
        title="Destinations"
        banner_img_url="bg-[url('https://res.cloudinary.com/dzv98o7ds/image/upload/v1675067157/Frame_75_gcoxuj.png')]"
      />
      <div className="text-center m-auto flex justify-center mt-20 font-[poppins]">
        <p className="w-3/5 lg:text-[20px] leading-6 ac-stn-quote mt-5 text-justify lg:text-center font-[poppins]">
          Swift Jets has access to 1000+ private aircraft. Every aircraft and
          private jet operator is accredited for safety and VIP service levels.
          Our expert team can find the best available price for your private jet
          hire on the most suitable private aircraft. For private jet charter
          advice call +234 707 8965 234x
        </p>
      </div> */}
       <h3 className=" text-[2em] pt-12 text-center">Destinations</h3>
      <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4 ml-auto mr-auto w-4/5">
            {teamData.map(({ img, name, position, socials }) => (
              <Card
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
            </div>
    </div>
  );
};

export default AircraftDestination;