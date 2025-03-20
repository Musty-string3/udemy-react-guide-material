import { useCounter, useDispatchCounter } from "../Context/Context";

const Input = ({ name }) => {
    const dispatch = useDispatchCounter();
    const state = useCounter();

    const numChangeHandler = (e) => {
        dispatch({type: 'change', payload: {name: e.target.name, value: e.target.value}});
    };
    return (
        <div>
            { name }
            <input
                type="number"
                name={ name }
                value={state[name]}
                onChange={numChangeHandler}
            />
        </div>
    )
}

export default Input;