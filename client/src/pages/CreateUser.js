//**Dependencies**//

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { SIGN_UP } from "../utils/mutations";

//**Mutation Call and Render For SingUp**//
function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(SIGN_UP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    console.log(mutationResponse.data);
    const token = mutationResponse.data.signUp.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main className="form-signin text-center">
      <form onSubmit={handleFormSubmit}>
        <img className="mb-4" src={logo} alt="Our logo" />
        <h1 className="h3 mb-3 fw-normal">New User</h1>
        <div className="form-floating" id="createEmail">
          <input
            type="email"
            name="email"
            value={formState.email}
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
            onChange={handleChange}
          />
          <label htmlFor="floatingEmail">Email address</label>
        </div>
        <div className="form-floating" id="createPassword">
          <input
            type="password"
            name="password"
            value={formState.password}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Create User
        </button>
        <Link to="/login">Already have an account? Click here to Login!</Link>
      </form>
    </main>
  );
}
export default Signup;
