import http from "../http-common";
import authHeader from "./auth-header";

const getAll = () => {
  return http.get("/notes", { headers: authHeader() });
};

const get = (id) => {
  return http.get(`/notes/${id}`, { headers: authHeader() });
};

const create = (data) => {
  return http.post("/notes", data, { headers: authHeader() });
};

const update = (id, data) => {
  return http.put(`/notes/${id}`, data, { headers: authHeader() });
};

const remove = (id) => {
  return http.delete(`/notes/${id}`, { headers: authHeader() });
};

const removeAll = () => {
  return http.delete(`/notes`, { headers: authHeader() });
};

const findByTitle = (title) => {
  return http.get(`/notes?title=${title}`, { headers: authHeader() });
};

const NoteService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default NoteService;
