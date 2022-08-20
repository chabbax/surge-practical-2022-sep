/* 
 * This service uses Axios for HTTP requests and Local Storage for user information & JWT
 * login(): POST {username, password} & save JWT to Local Storage
 * logout(): remove JWT from Local Storage
 * register(): POST {username, email, password}
 * getCurrentUser(): get stored user information (including JWT)
*/

import axios from "axios";

const API_URL = "http://localhost:8090/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
