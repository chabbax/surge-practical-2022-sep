import React, { useState, useEffect } from "react";
import NoteDataService from "../services/NoteService";
import { Link } from "react-router-dom";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveNotes();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveNotes = () => {
    NoteDataService.getAll()
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveNotes();
    setCurrentNote(null);
    setCurrentIndex(-1);
  };

  const setActiveNote = (note, index) => {
    setCurrentNote(note);
    setCurrentIndex(index);
  };

  const removeAllNotes = () => {
    NoteDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    NoteDataService.findByTitle(searchTitle)
      .then((response) => {
        setNotes(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list column">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <div className="col-md-8">
        <h4>Notes List</h4>

        <ul className="list-group">
          {notes &&
            notes.map((note, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveNote(note, index)}
                key={index}
              >
                {note.title}
              </li>
            ))}
        </ul>

        <button className="m-3 btn btn-danger" onClick={removeAllNotes}>
          Remove All
        </button>
      </div>
      <br></br>
      <br></br>

      <div className="col-md-6">
        {currentNote ? (
          <div>
            <h4>Note</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentNote.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentNote.description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentNote.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/notes/" + currentNote.id}
              className="m-1 btn btn-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Note...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesList;
