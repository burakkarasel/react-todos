import TodoRowItem from "./TodoRowItem";

function TodoTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned to</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((item) => (
          <TodoRowItem
            key={item.rowNumber}
            rowNumber={item.rowNumber}
            rowDescription={item.rowDescription}
            rowAssignedTo={item.rowAssignedTo}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
