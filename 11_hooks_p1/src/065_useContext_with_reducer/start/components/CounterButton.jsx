import { useCounterDispatch } from "../Context/CounerContext";

const CounterButton = ({calcType, step}) => {
    const dispatch = useCounterDispatch();

    const clickHandler = () => {
        dispatch({ type: calcType, step: step });
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;