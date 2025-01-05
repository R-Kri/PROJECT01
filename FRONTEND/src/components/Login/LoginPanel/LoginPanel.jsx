import React, { useState } from "react";
import PropTypes from "prop-types";
import { LoginForm } from "./LoginForm";
import { ConfirmOtp } from "./ConfirmOtp";
import UserForm from "./UserForm";
import Auth from "../../../auth";
import styled from "styled-components";

const Style = styled.div`
  .loginMain {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 50%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-align: left;
  }
  .login-wrap {
    top: 50%;
    left: 50%;
    bottom: 0;
    right: 0;
    width: 480px;
    height: auto;
    min-height: 500px;
    padding: 30px;
    min-width: 450px;
    border-radius: 10px;
    position: fixed;
    z-index: 2;
    background-color: #fff;
    color: black;
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 40%);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .close {
    font-size: 20px;
    text-align: right;
  }
  .close > span {
    cursor: pointer;
  }
`;

export const LoginPanel = ({ handleClick, handleUser }) => {
  const [otpSend, setOtpSend] = useState(false);
  const [findUser, setFindUser] = useState({});
  const [isUserExist, setIsUserExist] = useState(null);

  const [state, setState] = useState({
    phone: "",
    hash: "",
    otp: "",
  });

  const { phone, hash, otp } = state;
  const value = { phone, hash, otp };

  // Function to handle OTP send
  const handleOtpSend = () => {
    setOtpSend(true);
  };

  // Function to handle input changes
  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  // Function to handle hash changes
  const hashHandleChange = (newHash) => {
    setState({ ...state, hash: newHash });
  };

  // Function to check user existence
  const checkIsUserExist = (mob) => {
    console.log(mob);
    // Mock database check
    const userFound = false; // Update logic based on actual API/database check
    if (userFound) {
      const user = { name: "Rahul Yadav", password: "rahul@123" }; // Mock user
      setFindUser(user);
      setIsUserExist(true);
    } else {
      setIsUserExist(false);
    }
  };

  // Function to handle new user
  const handleNewUser = (newUser) => {
    handleUser(newUser);
  };

  return (
    <Style>
      <div className="loginMain">
        <div className="login-wrap">
          <div className="close">
            <span onClick={handleClick}>X</span>
          </div>
          {Auth.isAuthenticated() ? (
            isUserExist ? (
              handleNewUser(findUser)
            ) : (
              <UserForm handleNewUser={handleNewUser} />
            )
          ) : otpSend ? (
            <ConfirmOtp
              handleNewUser={checkIsUserExist}
              handleChange={handleChange}
              value={value}
            />
          ) : (
            <LoginForm
              handleOtpStatus={handleOtpSend}
              handleChange={handleChange}
              hashHandleChange={hashHandleChange}
              value={value}
            />
          )}
        </div>
      </div>
    </Style>
  );
};

// Prop Validation
LoginPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleUser: PropTypes.func.isRequired,
};
