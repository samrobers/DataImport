import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(SIGN_IN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      console.log(data);
      Auth.login(data.signIn.token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="form-signin text-center">
      <form onSubmit={handleFormSubmit}>
        <img className="mb-4" src={logo} alt="Our logo" />
        <h1 className="h3 mb-3 fw-normal">Login Here</h1>
        <div className="form-floating" id="loginEmail">
          <input
            type="email"
            name="email"
            // value={formState.email}
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
            onChange={handleChange}
          />
          <label htmlFor="floatingEmail">Email address</label>
        </div>
        <div className="form-floating" id="loginPassword">
          <input
            type="password"
            name="password"
            // value={formState.password}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={handleChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label id="rememberCheckbox">
            <input type="checkbox" value="remember-me" />
            <p>Remember Me</p>
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
        <Link to="/createUser">
          Need to make an account? Click here to create one!
        </Link>
      </form>
    </main>
  );
};

export default Login;
