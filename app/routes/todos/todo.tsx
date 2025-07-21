import { useLoaderData } from "react-router";
import { TODOS } from "~/mock/todos";

export const loader = ({params}: {params: {id: string}}) => {
  const todo = TODOS.find((todo) => todo.id === Number(params.id));
  return { todo };
}

const Todo = () => {
  const { todo } = useLoaderData<typeof loader>();
  return (
    <div>
      <h2 className="text-lg font-bold">Detail</h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-md">{todo?.title}</h3>
          <div className="text-gray-500 w-full">期日：{todo?.dueDate}</div>
          <div className="text-gray-500 w-full">ステータス：{todo?.isDone ? "完了" : "未完了"}</div>
        </div>
        <div className="w-full">{todo?.description}</div>
      </div>
    </div>
  )
}

export default Todo;