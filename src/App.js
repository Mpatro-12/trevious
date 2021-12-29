import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/main";
import Apidatademo from "./components/apidatademo";
import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./components/firebase";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<Apidatademo />} />
      </Routes>
    </>
  );
}

export default App;

function Homepage() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const SigninWithFirebase = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          setIsAuth(result?.user);
        })
        .catch((err) => console.log(err));
    };
    SigninWithFirebase();
  }, []);
  return (
    <>
      <Header isAuth={isAuth} />
      {/* <LoginForm /> */}
      <Hero />

      <Apidatademo isAuth={isAuth} />
    </>
  );
}
