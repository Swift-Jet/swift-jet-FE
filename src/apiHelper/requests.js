import { esES } from "@mui/x-date-pickers";
import axios from "axios";

export const getToken = () => {
    axios
    .get(
      `https://swift-jet-backend-staging.onrender.com/api/v1/user/token-provider`
    )
    .then((res) => {
     let token = res?.data?.token
     
     return token;
    })
    .catch((err) => console.log(err));
}

