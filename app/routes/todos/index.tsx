import { Link, useLoaderData } from 'react-router';
import { TODOS } from '../../mock/todos';

export const loader = async () => {
  const todos = TODOS;
  return { todos };
};

const TodosIndex = () => {
  const { todos } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">List</h2>
      <ul className="flex gap-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="border border-gray-200 hover:bg-gray-100 p-2 rounded-md min-w-64"
          >
            <Link to={`/todos/${todo.id}`} className="flex flex-col gap-2">
              {todo.title}
              <div className="text-gray-500 w-full text-right">
                期日：{todo.dueDate}
              </div>
              <div className="w-full">{todo.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosIndex;
