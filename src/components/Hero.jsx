import React from "react";
import "../css/hero.css";
import LoginForm from "./LoginForm";
function Hero() {
  return (
    <>
      <div className="container">
        <div className="hero d-flex flex-column justify-content-center align-items-center">
          <div>
            <h1>Track Your Cryptocurrency </h1>
          </div>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
