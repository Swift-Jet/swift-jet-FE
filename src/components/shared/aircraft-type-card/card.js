import React, { useContext } from "react";
import "./card.css";
import { Card, Avatar, Typography } from "@material-tailwind/react";

const DestCard = ({ img, name, position, socials , description}) => {
  return (
    <div className="">
      <Card color="transparent" shadow={false} className="text-center">
        <div class="">
          <div class="px-4">
            <img
              src={img}
              height={"250px"}
              width={"250px"}
              alt="..."
              class="shadow-lg mr-auto ml-auto"
            />
          </div>
        </div>
        <Typography variant="h6" color="blue-gray" className="mt-6 mb-1">
          {name}{" "}
        </Typography>

        <Typography className="font-medium text-sm text-gray-500">
        {description}
        </Typography>
      </Card>
    </div>
  );
};

export default DestCard;
