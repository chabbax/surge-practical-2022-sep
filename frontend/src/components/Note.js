import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NoteDataService from "../services/NoteService";

const Note = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialNoteState = {
    id: null,
    title: "",
    description: "",
    published: false,
  };
  const [currentNote, setCurrentNote] = useState(initialNoteState);
  const [message, setMessage] = useState("");

  const getNote = (id) => {
    NoteDataService.get(id)
      .then((response) => {
        setCurrentNote(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getNote(id);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentNote({ ...currentNote, [name]: value });
  };

  const updatePublished = (status) => {
    var data = {
      id: currentNote.id,
      title: currentNote.title,
      description: currentNote.description,
      published: status,
    };

    NoteDataService.update(currentNote.id, data)
      .then((response) => {
        setCurrentNote({ ...currentNote, published: status });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateNote = () => {
    NoteDataService.update(currentNote.id, currentNote)
      .then((response) => {
        console.log(response.data);
        setMessage("The note was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteNote = () => {
    NoteDataService.remove(currentNote.id)
      .then((response) => {
        console.log(response.data);
        navigate("/notes");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentNote ? (
        <div className="edit-form">
          <h4>Note</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentNote.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentNote.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentNote.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentNote.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteNote}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateNote}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Note...</p>
        </div>
      )}
    </div>
  );
};

export default Note;
