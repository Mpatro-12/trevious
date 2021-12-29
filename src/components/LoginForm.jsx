import React from "react";
import "../css/loginForm.css";
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function LoginForm() {
  const SigninWithFirebase = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch(alert);
  };

  return (
    <div>
      <div className=" d-flex justify-content-center align-items-center">
        <button onClick={SigninWithFirebase} className="btn btn-primary">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
