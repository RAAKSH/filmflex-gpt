import React, { useRef, useState } from "react";
import Header from "../Header";
import { validateFormInput } from "../../utils/validation.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice.js";
import { BACK_DROP, PROFILE_IMG } from "../../utils/constants.js";

const Login = () => {
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmitClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const errorMessage = validateFormInput(
      passwordRef?.current?.value,
      emailRef?.current?.value
    );

    setError(errorMessage);

    if (!errorMessage && toggleSignUp) {
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: nameRef?.current?.value,
            photoURL: PROFILE_IMG,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              
            })
            .catch((error) => {
              setError(error);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef?.current?.value,
            photoURL: PROFILE_IMG,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
             
            })
            .catch((error) => {
              setError(error);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };
  const handleClick = () => {
    setToggleSignUp(!toggleSignUp);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BACK_DROP}
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
            ref={nameRef}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          ref={emailRef}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          className="p-4 my-4  w-full bg-gray-700"
        />
        <p className="text-red-600 text-lg"> {error}</p>
        <div className="flex justify-center">
          <button
            className="p-4  my-4 bg-red-700 rounded-xl justify-center"
            onClick={(e) => handleSubmitClick(e)}
          >
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
