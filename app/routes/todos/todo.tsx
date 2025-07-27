import { useState } from 'react';
import { useLoaderData } from 'react-router';
import type { Todo } from '~/types/Todo';
import { supabase } from '~/utils/supabase';

export const loader = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await supabase.from('todos').select('*').eq('id', id).single();
  const todo = res.data as Todo;
  return { todo };
};

const initialState: Todo = {
  id: 0,
  title: '',
  description: '',
  due_date: '',
  is_done: false,
};

const Todo = () => {
  const { todo } = useLoaderData<typeof loader>();

  const [formState, setFormState] = useState<Todo>(todo ?? initialState);

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
                value={formState.due_date}
                onChange={(e) =>
                  setFormState({ ...formState, due_date: e.target.value })
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
              <div className="text-gray-500 w-full">期日：{todo?.due_date}</div>
              <div className="text-gray-500 w-full">
                ステータス：{todo?.is_done ? '完了' : '未完了'}
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
