import React from "react";

export const TodoRowItem: React.FC<{
  rowNumber: number,
  rowDescription: string,
  rowAssignedTo: string,
  deleteTodo: Function
}> = (props) => {
  return (
    <tr onClick={() => props.deleteTodo(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssignedTo}</td>
    </tr>
  );

}