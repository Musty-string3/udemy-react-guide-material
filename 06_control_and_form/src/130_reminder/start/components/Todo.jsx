import List from './List';
import Form from './Form';
import { useState } from 'react';

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [ todoVal, setTodo ] = useState(todosList);

  return (
    <>
      <List todosList={ [ todoVal, setTodo ] } />
      <Form todosList={todoVal} setTodo={ setTodo }/>
    </>
  )


};


export default Todo;
