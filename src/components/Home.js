import React from "react";
import { auth } from "./firebase";

function Home() {
  const logout = () => {
    auth.signOut();
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        Welcome
        {auth.currentUser.email}
        <h1>Home</h1>
        <button onClick={logout} className="btn btn-primary">
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Home;
