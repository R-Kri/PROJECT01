import React from "react";
import PropTypes from "prop-types"; // Importing PropTypes for props validation
import { useState } from "react";
import styled from "styled-components";

const Style = styled.div`
  form {
    width: 70%;
    padding-top: 50px;
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    input {
      height: 30px;
      padding: 2%;
      border-radius: 6px;
      border: 1px solid blue;
    }

    label {
      font-size: 16px;
    }

    p {
      line-height: 15px;
      color: red;
    }

    button {
      border: none;
      margin: auto;
      font-size: 13px;
      background: linear-gradient(
        to right,
        #8f92fa 0%,
        #6165f0 50%,
        #6c70eb 50%,
        #3339e9 100%
      );
      font-weight: 600;
      border-radius: 8px;
      color: white;
      width: 150px;
      height: 40px;
      cursor: pointer; /* Added for better user experience */
    }
  }
`;

export default function UserForm({ handleNewUser }) {
  const [newUser, setNewUser] = useState({});

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewUser(newUser);
  };

  // Handling input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Style>
      <form onSubmit={handleSubmit} className="userform">
        <label htmlFor="name">Enter full name</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          name="name"
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="password">Enter password</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          name="password"
          placeholder="Password"
          required
          pattern="(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}"
          title="Must contain at least one letter, one number, and one special character, and be at least 8 characters long"
        />

        <p>
          Must be at least 8 characters long and should contain at least one
          alphabet, one number, and one special character @$!%*#?&
        </p>

        <button className="cbtn" type="submit">
          Submit
        </button>
      </form>
    </Style>
  );
}

// PropTypes validation
UserForm.propTypes = {
  handleNewUser: PropTypes.func.isRequired, // Ensures handleNewUser is a required function
};
