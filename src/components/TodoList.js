import React from "react";

const TodoList = props => {
  const remove = obj => {
    props.removeTodo(obj.id);
  };

  return (
    <div>
      {props.todoList.map(todo => {
        return (
          <div
            style={todo.completed ? { textDecoration: "line-through" } : null}
            key={todo.title + todo.id}
          >
            {todo.title}
            <button
              onClick={() => {
                remove(todo);
              }}
            >
              Complete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
