import { useCounter, useDispatchCounter } from "../Context/Context";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const Select = () => {
    const dispatch = useDispatchCounter();
    const state = useCounter();

    const calculate = (e) => {
        dispatch({type: e.target.value});
    };

    return (
        <>
            <select value={state.type} name="type" onChange={calculate}>
                {CALC_OPTIONS.map((type) => (
                <option key={type} value={type}>
                    {type}
                </option>
                ))}
            </select>
        </>
    )
}

export default Select;