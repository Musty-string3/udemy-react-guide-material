// import { useDispatch } from "react-redux";
// import { add, minus } from "../store/modules/counter"

// const CounterButton = ({calcType, step}) => {
    
//     const dispatch = useDispatch();
    
//     const clickHandler = () => {
//         const action = calcType === '+' ? add(step) : minus(step);
//         console.log(action)
//         dispatch(action);
//     }

//     return <button onClick={clickHandler}>{calcType}{step}</button>
// }
// export default CounterButton;


import { useDispatch } from 'react-redux'
import { add, minus } from '../store/modules/counter'


const CounterButton = ({step, calcType}) => {
    const dispatch = useDispatch();
    const clickHandler = (step) => {
        const action = calcType === "add" ? add(step) : minus(step);
        dispatch(action);
    }

    return (
        <>
            <button onClick={ () => clickHandler(step) }>{calcType}{step}カウントアップ</button>
        </>
    )
}

export default CounterButton;