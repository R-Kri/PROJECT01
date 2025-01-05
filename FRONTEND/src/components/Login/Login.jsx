import { useState } from "react";
import PropTypes from "prop-types"; // Importing PropTypes for validation
import { LoginPanel } from "./LoginPanel/LoginPanel";
import Auth from "../../auth.js";
import axios from "axios";
import styled from "styled-components"; // Importing styled-components

const Style = styled.div`
  .loginTrigger {
    width: 30%;
    display: flex;
    cursor: pointer;
    gap: 2%;
    font-weight: 800;
    align-items: center;
    font-size: 0.9em;
  }

  .login-logo {
    min-width: 30px;
    min-height: 25px;
    background: #000980;
    border-radius: 50%;
    text-align: center;
    vertical-align: center;
    color: white;
    padding-top: 10px;
  }

  .account button {
    min-width: 150px;
    height: 30px;
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-size: 13px;
    margin-right: 50px;
    border-radius: 25px;
    background: linear-gradient(
      to right,
      #8fdcfa 0%,
      #619ff0 50%,
      #6c9feb 50%,
      #3339e9 100%
    );
  }

  #popup {
    width: 100%;
    height: 100%;
    position: fixed;
    top: -100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
    transition: 0.5s;
    visibility: hidden;
    background: rgba(0, 0, 0, 0.6);
  }

  #popup.active {
    visibility: visible;
    top: 50%;
  }

  .userLogged {
    height: 40px;
    gap: 5px;
    display: flex;
    flex-direction: row;

    button {
      width: 60px;
      background-color: #1d1dd4;
      color: #ffffff;
      font-weight: 600;
      border: none;
      border-radius: 6px;
    }
  }

  .white {
    color: #ffffff;
    font-weight: 500;
    font-size: 13px;
    align-items: center;
  }
`;

export const Login = ({ handleClick }) => {
  const [user, setUser] = useState({ name: "Traveller" });

  // Function to handle user logout
  const logOut = () => {
    axios
      .get("http://localhost:4000/logout")
      .then((res) => {
        console.log(res.data);
        // Optionally reload the page or update the UI
      })
      .catch((err) => {
        console.error(err.response);
      });
  };

  // Function to handle user login details
  const handleUser = (user) => {
    handleClick();
    setUser(user);
    window.location.reload(); // Reload to reflect changes
  };

  return (
    <Style>
      <div
        className="loginTrigger"
        onClick={Auth.isAuthenticated() ? null : handleClick}
      >
        {Auth.isAuthenticated() ? (
          <div className="userLogged">
            <div className="white">Hi {user.name}</div>
            <button onClick={logOut} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <div className="account">
            <button>Login</button>
          </div>
        )}
      </div>

      <div id="popup">
        <LoginPanel
          handleClick={handleClick} // Handle popup close
          handleUser={handleUser} // Set user details
        />
      </div>
    </Style>
  );
};

// PropTypes validation
Login.propTypes = {
  handleClick: PropTypes.func.isRequired, // Ensures handleClick is a required function
};
