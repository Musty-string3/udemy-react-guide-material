import { useContext, useReducer, createContext } from "react";

const CountContext = createContext();
const CountUpdateContext = createContext();

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "add":
            return state + payload;
        case "minus":
            return state - payload;
        default:
            throw new Error('不明なエラーです');
    }
}

const CountProvider = ({ children }) => {
    const initialState = 0;
    const [ count, dispatch ] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={ count }>
            <CountUpdateContext.Provider value={ dispatch }>
                { children }
            </CountUpdateContext.Provider>
        </CountContext.Provider>
    )
}

const useCount = () =>  useContext(CountContext);
const useUpdateCount = () =>  useContext(CountUpdateContext);

export { CountProvider, useCount, useUpdateCount };