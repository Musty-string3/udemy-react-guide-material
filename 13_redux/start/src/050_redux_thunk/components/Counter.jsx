import { add, minus, addAsync, minusAsync, addAsyncWithStatus, minusAsyncWithStatus } from "../store/modules/counter"
import { useSelector } from 'react-redux'

import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = () => {
    const status = useSelector(state => state.counter.status);

    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+" actionCreator={add} />
            <CounterButton step={2} calcType="-" actionCreator={minus}/>
            <CounterButton step={2} calcType="非同期+" actionCreator={addAsync} />
            <CounterButton step={2} calcType="非同期-" actionCreator={minusAsync} />
            <CounterButton step={2} calcType="update非同期+" actionCreator={addAsyncWithStatus} />
            <CounterButton step={2} calcType="update非同期-" actionCreator={minusAsyncWithStatus} />
            <h3>{ status }</h3>
        </>
    )
}
export default Counter;