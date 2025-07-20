import { Link, useLoaderData } from "react-router";
import { TODOS } from "../../mock/todos";

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
        {todos.map(({id, title}) => (
          <li key={id} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-md">
            <Link to={`/todos/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodosIndex;