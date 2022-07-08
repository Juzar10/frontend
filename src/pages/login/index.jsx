import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../reduxStore/user-slice";
import * as ROUTES from "../../constant/routes";
import Logo from "../../assets/images/logo2.jpeg";

const axios = require("axios");

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      password: e.target.password.value,
    };

    axios
      .post("http://localhost:8000/api/v1/user/login", data)
      .then(function (response) {
        dispatch(addUser(response.data.user));
        navigate(ROUTES.DASHBOARD);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="w-auto h-40 mx-auto" src={Logo} alt="Workflow" />
          <h2 className="mt-2 font-bold text-center text-secondary text-purple">
            Login in to your account
          </h2>
        </div>
        <form className="mt-4 space-y-6" onSubmit={submitHandler} method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="mb-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="name"
                type="text"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-sm appearance-none text-purple placeholder-lightpurple focus:outline-none focus:ring-lightpurple focus:border-lightpurple focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 rounded-sm appearance-none text-purple placeholder-lightpurple focus:outline-none focus:ring-lightpurple focus:border-lightpurple focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                {" "}
                Remember me{" "}
              </label>
            </div>
            <div className="flex">
              <p className="mr-2 text-menu text-lightpurple">
                Don't have an account
              </p>
              <Link to="/signin">
                <p className="font-bold text-orange">Sign Up </p>
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium border border-transparent rounded-md text-offwhite bg-purple group hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-offwhite group-hover:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
