// import { useSelector } from "react-redux"
// const CounterResult = () => {
//   const state = useSelector(state => state);
//   return <h3>{state.counter}</h3>;
// };

// export default CounterResult;

import { useSelector } from 'react-redux'


const CounterResult = () => {
  const state = useSelector(state => state);
  return (
    <h3>合計値:
        <span>{ state.counter }</span>
    </h3>
  )
}

export default CounterResult;