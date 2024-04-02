import React from 'react';
import { Todo } from "../utils/interface";
import { deleteTodo, getAllTodos } from '../utils/supabaseFunctions';

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<any>;
};

export const TodoList = (props: Props) => {
  const { todos, setTodos } = props;

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    let todos = await getAllTodos();
    setTodos(todos);
  };

  return (
    <div>
      <ul className='mx-auto'>
        {todos.map((todo) => (
          <div key={todo.id} className="flex bg-orange-200 rounded-md my-2 p-2 justify-between">
            <li className='font-medium'>✅{todo.title}</li>
            <span className='cursor-pointer' onClick={() => handleDelete(todo.id)}>✖️</span>
          </div>
        ))}
      </ul>
    </div>
  )
}
