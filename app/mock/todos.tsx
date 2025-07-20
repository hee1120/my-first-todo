import dayjs from "dayjs";

interface Todo {
  id: number;
  title: string;
  description: string;
  // 期日
  dueDate?: dayjs.Dayjs;
  // 完了フラグ
  isDone: boolean;
}

export const TODOS: Todo[] = [
  {
    id: 1,
    title: "Todo 1",
    description: "Todo 1 description",
    dueDate: dayjs(),
    isDone: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "Todo 2 description",
    dueDate: dayjs(),
    isDone: false,
  },
  {
    id: 3,
    title: "Todo 3",
    description: "Todo 3 description",
    dueDate: dayjs(),
    isDone: false,
  }
]