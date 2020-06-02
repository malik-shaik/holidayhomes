import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, user, clearAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!localStorage.getItem("token")) clearAuth(); // eslint-disable-next-line
  }, [isLoggedIn]);

  const logoutHandler = () => clearAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-4">
      <div className="container">
        <Link className="nav-link" to={"/"}><h4 className="logo">Holiday Homes</h4></Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              Home
              </Link>
          </li>
          {isLoggedIn ? (
            <li className="nav-item">
              <Link className="nav-link" to={"/"} onClick={logoutHandler}>
                Logout
              </Link>
              <p className="logo">Welcome back, {user.name}!</p>
            </li>
          ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    Sign up
                  </Link>
                </li>
              </>
            )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
