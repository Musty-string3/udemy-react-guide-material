import Item from '../components/Item';
import {useTodoContext, useUpdateTodoContext} from '../Context/TodoContext';


const List = ({deleteTodo}) => {

    const todos = useTodoContext();
    const dispatch = useUpdateTodoContext();

    const complete = (id) => {
        deleteTodo(id)
    }

    return (
        <div>
            {todos.map(todo => {
                return <Item todo={ todo } complete={ complete }/>
            })}
        </div>
    );
}

export default List;