import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../store';
import { removeTodo } from '../store';
import { selectVisibleTodos } from '../store2/todos/todos-selectors';

export const TodoList = () => {
    const todos = useSelector(state => selectVisibleTodos(state));
    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.title}>
                    <input
                        type='checkbox'
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />{' '}
                    {todo.title}{' '}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        delete
                    </button>
                </li>
            ))}
        </ul>
    );
};