import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // work logout button
  const handleLogOut = () => {
    userLogout().then().catch();
  };

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/addCraftItem"}>
          <a>Add Craft Items</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/allArtAndCraftItems"}>
          <a>All Art and Craft Items</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/myArtAndCraftList"}>
          <a>My Art and Craft List</a>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>

        <img
          className="w-16 h-16 rounded-full"
          src="https://i.ibb.co/mDcYMXS/mokeup.jpg"
          alt=""
        />
        <a className="btn btn-ghost text-xl">
          Art and <br /> Craft Store
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end flex">
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            onChange={handleToggle}
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      {user ? (
        <div className="navbar-end">
          <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
            <div className="w-12 rounded">
              <img className="rounded-full" src={user.photoURL} />
            </div>
          </div>
          ;
          <a
            onClick={handleLogOut}
            className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white"
          >
            Log Out
          </a>
        </div>
      ) : (
        <div className="navbar-end">
          <NavLink to={"/login"}>
            <a className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mr-2">
              Log in
            </a>
          </NavLink>
          <NavLink to={"/register"}>
            <a className="btn bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
              Register
            </a>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
