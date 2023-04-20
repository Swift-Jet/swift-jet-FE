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
    img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
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
    img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
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
    img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
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
    img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
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
    img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
    name: "South Africa",
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
    img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
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
    img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
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
    img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
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
    img: "https://previews.123rf.com/images/marynag/marynag1708/marynag170800012/83707347-wisconsin-state-capitol-building-national-historic-landmark-madison-wisconsin-usa-square.jpg",
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
    <div className="font-[poppins] pt-8 bg-white">
  
      <h3 className=" text-[2em] pt-24 text-center">Destinations</h3>
      <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3 ml-auto mr-auto w-4/5">
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
