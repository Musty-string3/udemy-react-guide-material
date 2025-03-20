// import Counter from "./components/Counter";
// import { Provider } from "react-redux";
// import store from "./store"

// const Example = () => {
//   return (
//     <>
//     </>
//   );
// };

// export default Example;

import Counter from './components/Counter'
import { Provider } from 'react-redux'
import configureStore from './store/index'


const Example = () => {
  return (
    <Provider store={configureStore}>
      <Counter />
    </Provider>
  );
};

export default Example;