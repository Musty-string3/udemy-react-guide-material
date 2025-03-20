import { useState } from "react";

const Form = ({ todosList, setTodo }) => {
    const [ inputVal, setInputVal ] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        console.log(inputVal);
        const maxId = Math.max( ...todosList.map(todo => todo.id));
        const newTodo = { id: maxId + 1, content: inputVal};
        setInputVal("");

        return setTodo([ ...todosList, newTodo ]);
    }

    const inputChange = (e) => setInputVal(e.target.value);

    return (
        <div>
            <form onSubmit={ addTodo }>
                <input
                    type="text"
                    placeholder="入力"
                    value={ inputVal }
                    onChange={ inputChange }
                />
                <button>追加</button>
            </form>
        </div>
    )
}

export default Form;