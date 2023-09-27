import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../header/assets/emberlogo.png";

const Login = () => {
  const history = useHistory();
  const responseGoogle = (response) => {
    console.log(response);
    // Here, you can make a check or directly move to the landing page
    // if (response.profileObj) {
    history.push("/landing");
    // }
  };

  const responseFail = (response) => {
    console.log(response);
    // history.push("/landing");
    // Here, you can handle errors and display appropriate messages to the user
  };

  const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
  `;

  const LoginLogoContainer = styled.div`
    border: 1px solid black;
    position: relative;
    background-color: white;
    padding: 200px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 25px;
    > img {
      object-fit: contain;
      height: 100px;
      margin-bottom: 40px;
    }

    > button {
      margin-top: 30px;
      text-transform: inherit;
      background-color: #41af8e;
      color: white;
      margin: 10px;
      margin-top: 20px;
      &:hover {
        color: black;
      }
    }
  `;

  return (
    <LoginContainer>
      <LoginLogoContainer>
        <img src={logo} alt="embervoip" />
        <h1>Sign In</h1>
        <div>
          <GoogleLogin
            clientId="707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseFail}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </LoginLogoContainer>
    </LoginContainer>
  );
};

export default Login;
