import axios from "axios";

// Initializes axios with HTTP base Url and headers.
export default axios.create({
  baseURL: "http://localhost:8090/api",
  headers: {
    "Content-type": "application/json",
  },
});
