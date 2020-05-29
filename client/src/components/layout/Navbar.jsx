import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// uncomment this...

const Navbar = () => {
  const { isLoggedIn, user, clearAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!localStorage.getItem("token")) clearAuth(); // eslint-disable-next-line
  }, [isLoggedIn]);

  const logoutHandler = () => clearAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-4">
      <div className="container">
        <h3>Holiday Homes</h3>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <h5>{user.name}</h5>
                <Link className="nav-link" to={"/"} onClick={logoutHandler}>
                  Logout
                </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
