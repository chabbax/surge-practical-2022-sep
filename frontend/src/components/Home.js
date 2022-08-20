// This is a public page that shows public content. People don’t need to log in to view this page.
import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h1 class="display-4">Surge Global Software Engineering Internship</h1>
        <h6>{content}</h6>
        <br></br>

        <p class="lead">
          This is the public page in which any type of user would be able to see
          this public content
        </p>
        <p>
          The user can naviagte to their created notes and do any kind of CRUD
          operations after they have created an account and logged in
          successfully.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="/notes" role="button">
            Learn more
          </a>
        </p>
      </header>
    </div>
  );
};

export default Home;
