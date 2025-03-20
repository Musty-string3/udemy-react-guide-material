import { createContext, useContext, useReducer } from "react";

const useContextProvider = createContext();
const useDispatchContextProvider = createContext();

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "change": {
            const { name, value } = payload;
            return { ...state, [name]: value };
        }
        case "add": {
            return { ...state, result: Number(state.a) + Number(state.b) };
        }
        case "minus": {
            return { ...state, result: state.a - state.b };
        }
        case "divide": {
            return { ...state, result: state.a / state.b };
        }
        case "multiply": {
            return { ...state, result: state.a * state.b };
        }
        default:
            throw new Error("operator is invalid");
    }
};

const CalcProvider = ({children}) => {

    const initState = {
        a: 1,
        b: 2,
        result: 3,
    };

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <useContextProvider.Provider value={ state }>
            <useDispatchContextProvider.Provider value={ dispatch }>
                {children}
            </useDispatchContextProvider.Provider>
        </useContextProvider.Provider>
    )
}

const useCounter = () => {
    return useContext(useContextProvider);
};

const useDispatchCounter = () => {
    return useContext(useDispatchContextProvider);
};

export {CalcProvider, useCounter, useDispatchCounter }