import { useState } from 'react'

const Example = () => {
  const [ count, setCount ] = useState(0);
  const countUp = () => {
    return setCount(prev => {
      return prev + 1;
    })
  }
  const countDown = () => setCount(prev => prev - 1);
  return (
    <>
      <h3>練習問題</h3>
      <p>現在のカウント数: { count }</p>
      <button onClick={ countUp }>+</button>
      <button onClick={ countDown }>-</button>
    </>
  );
};

export default Example;
