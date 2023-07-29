import React, { useState, useEffect } from "react";
import "./Style.css";
import axios from "axios";

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchUserData();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h2>Profile Page</h2>
      <div className="content">
        <div className="left">
          <p>
            <b>Username 👤:</b> {user.username}
          </p>
          <p>
            <b>Name {user.gender === "male" ? "🙋‍♂️" : "🙋‍♀️"}:</b> {user.firstName}{" "}
            {user.lastName}
          </p>
          <p>
            <b>Email 📧:</b> {user.email}
          </p>
          <p>
            <b>Gender {user.gender === "male" ? "🚹" : "🚺"}:</b> {user.gender}
          </p>
          <p>
            <b>Age ♾️:</b> {user.age}
          </p>
          <p>
            <b>Address 📌:</b> {user.address.address}, {user.address.city}
          </p>
        </div>
        <div className="right">
            <img src={user.image} alt={user.firstName} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
