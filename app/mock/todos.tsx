import dayjs from "dayjs";

interface Todo {
  id: number;
  title: string;
  description: string;
  // 期日
  dueDate: string;
  // 完了フラグ
  isDone: boolean;
}

const now = dayjs();
const dueDate = now.add(1, "day");

export const TODOS: Todo[] = [
  {
    id: 1,
    title: "Todo 1",
    description: "Todo 1 description",
    dueDate: dueDate.format("YYYY/MM/DD"),
    isDone: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "Todo 2 description",
    dueDate: dueDate.format("YYYY/MM/DD"),
    isDone: false,
  },
  {
    id: 3,
    title: "Todo 3",
    description: "Todo 3 description",
    dueDate: dueDate.format("YYYY/MM/DD"),
    isDone: false,
  }
]