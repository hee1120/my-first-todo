import { useState } from "react";
import { useLoaderData } from "react-router";
import { TODOS } from "~/mock/todos";

export const loader = ({params}: {params: {id: string}}) => {
  const todo = TODOS.find((todo) => todo.id === Number(params.id));
  return { todo };
}

const Todo = () => {
  const { todo } = useLoaderData<typeof loader>();

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  }

  return (
    <div className="border border-gray-200 p-4 rounded-md">
      <div className="flex justify-between">
        {/* タイトル */}
        <h2 className="text-lg font-bold">Detail</h2>
        {/* 編集ボタン   */}
        <button 
          type="button"
          onClick={handleEditClick}
          className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md" 
        >
          Edit
        </button>
      </div>
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