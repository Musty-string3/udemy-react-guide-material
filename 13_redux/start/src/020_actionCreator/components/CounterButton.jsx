import { useDispatch } from "react-redux";
import { add, minus } from '../store/modules/counter';

const CounterButton = ({calcType, step}) => {
    
    const dispatch = useDispatch();
    // const dispatch = useCounterDispatch();
    
    const clickHandler = () => {
        const action = calcType === "+" ? add(step) : minus(step);
        dispatch(action);
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;