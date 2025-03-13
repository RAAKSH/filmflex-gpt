import { useState } from "react";
import Filmflex from "../../assets/Filmflex.png";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeUser } from "../../utils/userSlice.js";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userInfo = useSelector((store) => store?.userReducer);

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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 h-24" src={Filmflex} alt="Backdrop" />

      {userInfo && (
        <div
          className="relative flex p-2"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <img
            className="w-10 h-10 rounded-md cursor-pointer"
            src={userInfo?.photoURL}
            alt="Profile"
          />
          

          {isDropdownOpen && (
            <div className="absolute right-0 mt-12 w-40 bg-black text-white rounded-lg shadow-lg">
              <ul className="py-2">
              <li className="px-4 py-2">
                  <span className="text-red-700">{userInfo?.displayName}</span>
                </li>
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Settings
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
      )}
    </div>
  );
};

export default Header;
