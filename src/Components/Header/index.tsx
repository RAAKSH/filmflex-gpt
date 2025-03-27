import { useEffect, useState } from "react";
import Filmflex from "../../assets/Filmflex.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice.js";
import { toggleGPTSearchView } from "../../utils/GPTSlice.js";
import { SUPPORTED_LANGUAGES } from "../../utils/constants.js";
import { changeLanguage } from "../../utils/configSlice.js";

const Header = () => {
  const showGPT = useSelector((store) => store?.gptSearch?.showGPTSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userInfo = useSelector((store) => store?.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);

    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 justify-between bg-green-400 sm:bg-blue-500 md:bg-black flex flex-col md:flex-row">
      <img
        className="w-44 h-24 mx-auto md:mx-0"
        src={Filmflex}
        alt="Backdrop"
      />

      {userInfo && (
        <div className="relative flex items-center p-2">
          <div className="flex items-center gap-4">
            {/* {showGPT && (
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )} */}

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <img
                className="w-10 h-10 rounded-md cursor-pointer"
                src={userInfo?.photoURL}
                alt="Profile"
              />

              {isDropdownOpen && (
                <div
                  className="absolute right-0   top-full mt-2  pt-0 w-60 bg-black text-white rounded-lg shadow-lg"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <ul className="py-2">
                    <li className="px-4 py-2">
                      <span className="text-red-700">
                        {userInfo?.displayName}
                      </span>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                      Profile
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                      onClick={handleSignOut}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
