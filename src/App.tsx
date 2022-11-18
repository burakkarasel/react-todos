import "./App.css";
import { TodoTable } from "./components/TodoTable";
import React, { useState } from "react";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoModel } from "./models/TodoModel";

export const App = () => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodo = (description: string, assignedTo: string) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssignedTo: assignedTo,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber: number) => {
    const filtered = todos.filter(
      (val) => val.rowNumber !== deleteTodoRowNumber
    );
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? "Close Form" : "Open Form"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}