// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const AddButton = (props) => <button onClick={props.onClick}>{props.text}</button>;

export const AddField = (props) =>
  <input
    name={props.name}
    onChange={props.onChange}
    value={props.value}
    placeholder="New Task"
  />

export const ListView = (props) => {
  return (
    <ul>
      {
        props.tasksAoOFromState.map((item, index) =>
        <li key={item.id} style={item.completed ? { textDecoration: "line-through" } : null}>{item.task}
          <button className="button" onClick={() =>props.complete(index)}>Completed</button>
          <button className="button" onClick={() =>props.delete(index)}>Delete</button>
        </li>)
      }
    </ul>
  );
}


export default AddButton;