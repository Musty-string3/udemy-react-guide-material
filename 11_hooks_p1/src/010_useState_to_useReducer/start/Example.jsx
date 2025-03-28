import { useReducer } from "react";
import { useState } from "react";

const Example = () => {
  const [ state, setState ] = useState(0);
  const countUp = () => {
    setState(prev => ++prev);
  }

  const [ rstate, dispatch ] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error("不明なactionです。");

    }

    // if (action === "+") {
    //   return ++prev;
    // } else if (action === "-") {
    //   return --prev;
    // }

  }, 0);

  const rcountUp = () => {
    dispatch({ type: "+", step: 2 });
  }

  const rcountDown = () => {
    dispatch({ type: "-", step: 3 });
  }

  return (
    <>
      <h3>{ state }</h3>
      <button onClick={countUp}>+</button>
      <h3>{ rstate }</h3>
      <button onClick={rcountUp}>+</button>
      <button onClick={rcountDown}>-</button>
    </>
  );
};

export default Example;
