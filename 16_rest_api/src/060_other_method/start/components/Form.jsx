import { useState } from "react";

import { useDispatchTodos } from "../context/TodoContext";
import { todoApi } from "../api/todo";


const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const dispatch = useDispatchTodos();

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      // id: Math.floor(Math.random() * 1e5), // json-server v0tov1対応 デフォルトで文字列のidが振られるため不要。
      content: enteredTodo,
      editing: false,
    };

    todoApi.post(newTodo).then(newTodo => {
      dispatch({ type: "todo/add", todo: newTodo });
      setEnteredTodo("");
    })
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
