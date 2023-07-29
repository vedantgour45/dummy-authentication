// App.js
import React, { useState } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedIn(true);
      setUserId(user.id);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    setUserId(null);
  };

  return (
    <div className="container">
      {loggedIn ? (
        <>
          <Profile userId={userId} />
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
