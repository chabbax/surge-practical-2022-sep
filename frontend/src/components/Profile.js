// Gets current User from Local Storage by calling AuthService.getCurrentUser() method and show user information (with token).
import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {

  // Fetch details current state logged in user
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> 's Profile Information
        </h3>
        <br></br>
        <p class="lead">
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p class="lead">
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p class="lead">
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul class="lead">
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </header>
    </div>
  );
};

export default Profile;
