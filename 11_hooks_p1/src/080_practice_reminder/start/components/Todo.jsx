import List from "./List"
import Form from "./Form"
import {useUpdateTodoContext} from '../Context/TodoContext';

const Todo = () => {

  const dispatch = useUpdateTodoContext();
  console.log("a");
  console.log(dispatch);

  const deleteTodo = (id) => {
    dispatch({ type: "deleteTodo", payload: { deleteId: id } })
  };

  const createTodo = (todo) => {
    dispatch({ type: "addTodo", payload: { createTodo: todo } })
  };

  return (
    <>
      <List deleteTodo={deleteTodo}/>
      <Form createTodo={createTodo}/>
    </>
  )
};
export default Todo;
