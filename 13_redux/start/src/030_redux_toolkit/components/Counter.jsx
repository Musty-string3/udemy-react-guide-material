// import CounterResult from "./CounterResult"
// import CounterButton from "./CounterButton"

import { useState } from "react"

// const Counter = () => {
//     return (
//         <>
//             <CounterResult />
//             <CounterButton step={2} calcType="+"/>
//             <CounterButton step={2} calcType="-"/>
//             <CounterButton step={10} calcType="+"/>
//             <CounterButton step={10} calcType="-"/>
//         </>
//     )
// }
// export default Counter;

import CounterResult from './CounterResult';
import CounterButton from './CounterButton';


const Counter = () => {

    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="add" />
            <CounterButton step={10} calcType="add" />
            <CounterButton step={2} calcType="minus" />
            <CounterButton step={10} calcType="minus" />
        </>
    )
}

export default Counter;




