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
const popularDestinations = [
  {
    name: "Paris, France",
    imageLink: "https://www.travelandleisure.com/thmb/jmvOuFx8adaJTqhi6xKub-hFYEc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7-paris-social-niche1115-c0245573f1a8440da95ba8bd2fa82d7c.jpg",
    description: "Paris, the 'City of Light,' is famous for its iconic Eiffel Tower, charming cafes, art museums like the Louvre, and romantic ambiance along the Seine River."
  },
  {
    name: "New York City, USA",
    imageLink: "https://t3.ftcdn.net/jpg/02/09/70/56/360_F_209705645_b78HGJI1i1mxqLwMYA7z1m3VvCxgxJFO.jpg",
    description: "New York City, the 'Big Apple,' is a bustling metropolis with renowned landmarks like Times Square, Central Park, Statue of Liberty, and a vibrant arts and culinary scene."
  },
  {
    name: "Tokyo, Japan",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0mZe1yumnLY7BwbSYA6L_B-oCrFLfZtqCANGJmgk&s",
    description: "Tokyo, Japan's capital, is a futuristic city known for its cutting-edge technology, rich culture, bustling street markets, and historic temples."
  },
  {
    name: "Rome, Italy",
    imageLink: "https://media.istockphoto.com/id/1388018793/photo/grand-canal-in-venice.jpg?s=612x612&w=0&k=20&c=uDUrctquPNUPzlpNLwTkJIkc1Gig0aUWJknF6FrqxJE=",
    description: "Rome, the 'Eternal City,' boasts ancient ruins like the Colosseum, stunning architecture, Vatican City, and delectable Italian cuisine."
  },
  {
    name: "Barcelona, Spain",
    imageLink: "https://media.istockphoto.com/id/670888198/photo/view-of-the-sea-from-a-height-pe%C3%B1%C3%ADscola-castell%C3%B3n-spain-beautiful-view-of-the-sea-and-the-bay.jpg?s=612x612&w=0&k=20&c=VHW6qqIbLYIdB9Ajb9m8fDrArjjUPywffgn55zUs3JU=",
    description: "Barcelona, a vibrant coastal city, offers unique architecture by Gaudi, beautiful beaches, lively street performers, and a rich Catalan culture."
  },
  {
    name: "Cape Town, South Africa",
    imageLink: "https://media.istockphoto.com/id/620737858/photo/cape-town-and-the-12-apostels-from-above.jpg?s=612x612&w=0&k=20&c=WPP0CFtX4y-eHwplbZ1DvPP9bnGjjpz4U4ZZvj8i8Tc=",
    description: "Cape Town, a picturesque city, is famed for Table Mountain, stunning beaches, diverse wildlife, and a blend of African and European influences."
  },
  {
    name: "Sydney, Australia",
    imageLink: "https://a.cdn-hotels.com/gdcs/production5/d1996/54fdb73f-eee5-4612-a3e7-6fc7ed2f7bee.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    description: "Sydney, Australia's largest city, charms visitors with the iconic Sydney Opera House, beautiful harbor, Bondi Beach, and a thriving arts scene."
  },
  {
    name: "Bali, Indonesia",
    imageLink: "https://media.istockphoto.com/id/653953140/photo/hindu-temple-in-bali.webp?b=1&s=170667a&w=0&k=20&c=-Zo3LO0CI8fbtwkUUH50QJ0wtVjzGj1aCtfRIHDI5uQ=",
    description: "Bali, the 'Island of the Gods,' offers lush landscapes, ancient temples, stunning rice terraces, and vibrant cultural celebrations."
  },
  {
    name: "Dubai, United Arab Emirates",
    imageLink: "https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=",
    description: "Dubai, a city of opulence, boasts futuristic skyscrapers, luxury shopping, desert safaris, and unique attractions like the Palm Jumeirah."
  }
];

const AircraftDestination = () => {
  return (
    <div className="font-[poppins] pt-8 bg-white">

      <h3 className=" text-[2em] pt-24 text-center">Destinations</h3>
      <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3 ml-auto mr-auto w-4/5 mb-24">
        {popularDestinations.map(({ img, name, description, imageLink }) => (
          <Card
            key={name}
            img={imageLink}
            name={name}
            // position={position}
            description={description}
          // socials={
          //   <div className="flex items-center gap-2">
          //     {socials.map(({ color, name }) => (
          //       <IconButton key={name} color={color} variant="text">
          //         <i className={`fa-brands text-lg fa-${name}`} />
          //       </IconButton>
          //     ))}
          //   </div>
          // }
          />
        ))}
      </div>
    </div>
  );
};

export default AircraftDestination;
