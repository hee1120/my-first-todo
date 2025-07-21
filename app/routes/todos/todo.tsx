import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { TODOS, type Todo } from '~/mock/todos';

export const loader = ({ params }: { params: { id: string } }) => {
  const todo = TODOS.find((todo) => todo.id === Number(params.id));
  return { todo };
};

const initialState: Todo = {
  id: 0,
  title: '',
  description: '',
  dueDate: '',
  isDone: false,
};

const Todo = () => {
  const { todo } = useLoaderData<typeof loader>();

  const [formState, setFormState] = useState<Todo>(todo ?? initialState);
  console.log(formState);

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="border border-gray-200 p-4 rounded-md">
      <div className="flex justify-between">
        {/* タイトル */}
        <h2 className="text-lg font-bold">Detail</h2>
        {/* 編集ボタン   */}
        {!isEditing && (
          <button
            type="button"
            onClick={handleEditClick}
            className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md"
          >
            Edit
          </button>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {isEditing ? (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                className="border border-gray-200 p-2 rounded-md"
                value={formState.title}
                onChange={(e) =>
                  setFormState({ ...formState, title: e.target.value })
                }
              />
              <input
                type="text"
                className="border border-gray-200 p-2 rounded-md"
                value={formState.dueDate}
                onChange={(e) =>
                  setFormState({ ...formState, dueDate: e.target.value })
                }
              />
              <textarea
                className="border border-gray-200 p-2 rounded-md"
                value={formState.description}
                onChange={(e) =>
                  setFormState({ ...formState, description: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={handleCancelClick}
                className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md"
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-1">
              <h3 className="text-md">{todo?.title}</h3>
              <div className="text-gray-500 w-full">期日：{todo?.dueDate}</div>
              <div className="text-gray-500 w-full">
                ステータス：{todo?.isDone ? '完了' : '未完了'}
              </div>
            </div>
            <div className="w-full">{todo?.description}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
