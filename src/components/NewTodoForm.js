import React, { useState } from "react";

function NewTodoForm(props) {
  const [description, setDiscription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const submitTodo = () => {
    if (description && assignedTo) {
      props.addTodo(description, assignedTo);
      setAssignedTo("");
      setDiscription("");
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned to:</label>
          <input
            type="text"
            className="form-control"
            required
            //! here we user useState to capture input changes
            onChange={(e) => setAssignedTo(e.target.value)}
            //! and here we assign the captured value into inputs value
            value={assignedTo}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            type="text"
            className="form-control"
            required
            rows={3}
            //! here we user useState to capture input changes
            onChange={(e) => setDiscription(e.target.value)}
            //! and here we assign the captured value into inputs value
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-success mt-3"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
