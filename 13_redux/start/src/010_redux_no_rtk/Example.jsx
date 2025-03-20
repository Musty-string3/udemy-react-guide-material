import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
import { Provider } from 'react-redux';
import createStore from './store';

const Example = () => {
  return (
    <Provider store={ createStore }>
      <Counter />
    </Provider>
  );
};

export default Example;
