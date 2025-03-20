import Todo from "./components/Todo"
import {TodoProvider} from './Context/TodoContext';


const Example = () => {
  return (
    <TodoProvider>
    <h3>練習問題</h3>
    <ul>
      <li>NG: ReducerとContextを使ってTodoをグローバルなステートにしましょう</li>
      <ol>
        <li>todos</li>
      </ol>
    </ul>
      <h2>Reminder</h2>
      <Todo />
    </TodoProvider>
  );
};

export default Example;
