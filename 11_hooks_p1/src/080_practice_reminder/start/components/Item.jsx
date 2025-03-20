import { useState } from "react";
import {useUpdateTodoContext} from '../Context/TodoContext';


const Item = ({ todo, complete }) => {
    const dispatch = useUpdateTodoContext();

    const [ editingContent, setEditingContent ] = useState(todo.content);
    const toggleEditMode = (todo) => {
        dispatch({ type: "editModeTodo", payload: { editId: todo.id }});
    };

    const confirmTodo = (e, todo) => {
        e.preventDefault();
        dispatch({ type: "confirmTodo", payload: { changeId: todo.id, value: editingContent }});
    }

    const changeTodo = (e) => {
        setEditingContent(e.target.value);
    }

    return (
        <div key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <form onSubmit={(e) => confirmTodo(e, todo)}>
                {
                    todo.editing
                    ?
                    <input type="text" name="" id={ todo.id } value={ editingContent } onChange={changeTodo}/>
                    :
                    <span onDoubleClick={ () => toggleEditMode(todo) }>{todo.content}</span>
                }
            </form>
        </div>
    )
}

export default Item;