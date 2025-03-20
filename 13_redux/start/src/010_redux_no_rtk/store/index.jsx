import { createStore } from 'redux';

const initialState = 0;
const reducer = (prev = initialState, { type, step }) => {
    switch (type) {
        case "+":
            return prev + step;
        case "-":
            return prev - step;
        default:
            return prev
    }
}

export default createStore(
    reducer
);