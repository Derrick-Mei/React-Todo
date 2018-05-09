// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const AddButton = (props) => <button onClick={props.onClick}>Add</button>;



export const ListView = (props) => {
  return (
    <ul>
      {
        props.listViewTaskProp.map((item, index) => <li key={index} onClick={() => props.onClick(index)}>{item}
        <button className="button">  Completed</button>
        <button className="button">  Delete</button>
        </li>)
      }
    </ul>
  );
}


export default AddButton;