import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useHistory } from "react-router-dom";
//import {getToken} from "../../apiHelper/requests.js"

function GoogleLoginForm() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [token, setToken] = useState([]);
  const history = useHistory();
  const getToken = () => {
    axios
      .get(`https://swift-jet-backend.onrender.com/api/v1/user/token-provider`)
      .then((res) => {
        setToken(res?.data?.token);
      })
      .catch((err) => console.log(err));
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
 
  useEffect(() => {
    getToken();
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          let user = {
            first_name: res.data.family_name,
            last_name: res.data.given_name,
            email: res.data.email,
            token: token,
          };
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("authenticated", JSON.stringify(true));
          localStorage.setItem("google-auth", JSON.stringify(true));
          history.push(JSON.parse(localStorage.getItem("prevpath")));
          localStorage.removeItem("prevpath");
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <div>
      <button
        className="w-100 bg-white text-rose-900  py-2 px-4 border border-gray-400 rounded hover:bg-rose-900 google-auth"
        onClick={() => login()}
        type="button"
      >
        Sign in with Google
      </button>
    </div>
  );
}
export default GoogleLoginForm;
