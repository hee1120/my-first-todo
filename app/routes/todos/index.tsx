import { Link, useLoaderData } from "react-router";
import { TODOS } from "../../mock/todos";
import dayjs from "dayjs";

export const loader = async () => {
  const todos = TODOS;
  return { todos };
}

const TodosIndex = () => {
  const { todos } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-2">
      <h1>TodosIndex</h1>
      <ul className="flex gap-2">
        {todos.map(({id, title, dueDate}) => (
          <li key={id} className="border border-gray-200 hover:bg-gray-100 p-2 rounded-md min-w-64">
            <Link to={`/todos/${id}`} className="flex flex-col gap-2">
              {title}
              <div className="text-gray-500 w-full text-right">期日：{dueDate}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodosIndex;