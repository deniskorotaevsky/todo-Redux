import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { removeTodo, toggleTodo } from '../store/todos/todos-actions';
import { selectVisibleTodos } from '../store/todos/todos-selectors';

export const TodoList = () => {
    const dispatch = useDispatch();
    const { filter } = useParams();
    const todos = useSelector((state) => selectVisibleTodos(state, filter));

    return (
        <ul>
            {todos.map((todo) => (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <li
                        key={todo.title}
                        style={{
                            listStyleType: 'none',
                        }}
                    >
                        <input
                            type='checkbox'
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />

                        <div
                            style={{
                                marginLeft: '10px',
                                marginTop: '-2px',
                            }}
                        >
                            {todo.title}
                        </div>
                    </li>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        delete
                    </button>
                </div>
            ))}
        </ul>
    );
};
