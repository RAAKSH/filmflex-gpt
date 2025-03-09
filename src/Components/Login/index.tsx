import React, { useState } from "react";
import Header from "../Header";

const Login = () => {
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const handleClick = () => {
    setToggleSignUp(!toggleSignUp);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
          alt="Backdrop"
        />
      </div>

      <form className="absolute p-12 bg-black/80 w-3/12 my-36 right-0 left-0 mx-auto  text-white z-20 rounded-2xl">
        <h1 className="text-2xl font-bold py-4">
          {toggleSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {toggleSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-700"
        />
        <div className="flex justify-center">
          <button className="p-4  my-4 bg-red-700 rounded-xl justify-center">
            {toggleSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>
        {!toggleSignUp ? (
          <p onClick={handleClick}>
            New to Filmflix <span className="underline">Sign Up</span> Now
          </p>
        ) : (
          <p onClick={handleClick}>
            Already Registered. <span className="underline">Sign In</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
