import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h1 class="display-4">Hello, Surge!</h1>
        <h6>{content}</h6>
        <br></br>

        <p class="lead">
          This is the protected route which is displayed to only the user's with
          the USER_ADMIN
        </p>
        <p>
          The user can naviagte to their created notes and do any kind of CRUD
          operations their
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

export default BoardAdmin;
