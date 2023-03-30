import React, { useContext } from "react";
import SignForm from "../../components/signInlayout/SignForm";
import Layout from "../../components/shared/layout/Layout";
import GoogleLoginForm from "../../components/Login-Card/GoogleLoginForm";

const SignIn = () => {
  return (
    <Layout>
      <SignForm />
      <GoogleLoginForm />
    </Layout>
  );
};

export default SignIn;