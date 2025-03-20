const List = ({ todosList }) => {
    const [ todoList, setTodo ] = todosList;
    const successTodo = (todoId) => {
        const newTodoList = todoList.filter(todo => todo.id !== todoId);
        console.log(newTodoList);
        return setTodo(newTodoList);
    }

    return (
        <div>
            {
                todoList.map(todo => {
                    return (
                        <div key={ todo.id }>
                            <button onClick={ () => successTodo(todo.id) }>完了</button>
                            <li key={ todo.id }>{ todo.content }</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List;