import { useCounter } from "../Context/Context";

const Result = () => {
    const state = useCounter();

    return (
        <>
            <h3>結果：{state.result}</h3>
        </>
    )
}

export default Result;