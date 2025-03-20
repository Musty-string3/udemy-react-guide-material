import { useReducer, createContext, useContext } from "react"

const ContextTodo = createContext();
const ContextUpdateTodo = createContext();

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "deleteTodo":
            return state.filter((todo) => {
            return todo.id !== payload.deleteId;
            });

        case "addTodo":
            return [ ...state, payload.createTodo ];

        case "editModeTodo":
            return state.map(todo => {
            return todo.id === payload.editId ? { ...todo, editing: !todo.editing } : todo
            });

        case "confirmTodo":
            return state.map(todo => {
            return todo.id === payload.changeId ? { ...todo, content: payload.value, editing: !todo.editing  } : todo
            });
        default:
            throw new Error("不明なエラーです");
    }
}

const TodoProvider = ({ children }) => {
    const initialState = [
        {
            id: 1,
            content: "店予約する",
            editing: false,
        },
        {
            id: 2,
            content: "卵買う",
            editing: false,
        },
        {
            id: 3,
            content: "郵便出す",
            editing: false,
        },
    ];

    const [ todos, dispatch ] = useReducer(reducer, initialState);

    return (
        <ContextTodo.Provider value={ todos }>
            <ContextUpdateTodo.Provider value={ dispatch }>
                { children }
            </ContextUpdateTodo.Provider>
        </ContextTodo.Provider>
    )
}

const useTodoContext = () => {
    return useContext(ContextTodo);
}

const useUpdateTodoContext = () => {
    return useContext(ContextUpdateTodo);
}

export {TodoProvider, useTodoContext, useUpdateTodoContext };