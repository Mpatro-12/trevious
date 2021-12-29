import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
// import LoginForm from "./LoginForm";
// import Home from "./Home";
function Header({ isAuth }) {
  return (
    <>
      <nav className="navbar py-3 navbar-expand-lg navbar-transparent bg-transparent">
        <div className="container">
          <Link className="name" to="/">
            CryptoTracker
          </Link>

          {/* <Home /> */}
          {/* {isAuth ? <Logout /> : <LoginForm />} */}
        </div>
      </nav>
    </>
  );
}
export default Header;

function Logout() {
  const logout = () => {
    auth.signOut();
  };
  return (
    <button onClick={logout} className="btn btn-primary">
      Sign out
    </button>
  );
}
