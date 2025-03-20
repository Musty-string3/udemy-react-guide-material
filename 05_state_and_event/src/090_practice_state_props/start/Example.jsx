import { useState } from "react";

// stateの更新
const Example = () => {
  const [ count, setCount ] = useState(0);
  return (
    <>
      <CountResult title="カウント" count={count}/>
      <CountUpdate setCount={setCount} />
    </>
  );
};


// カウントの表示
const CountResult = ({ title, count }) => {
  return (
    <h3>{title}:{count}</h3>
  )
}


// カウントの更新
const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    setCount(prev => prev + 1);
  };
  const countDown = () => {
    setCount(prev => prev - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
