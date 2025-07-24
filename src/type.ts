export type Todo = {
  id: number;
  isDone: boolean;
  content: string;
};

export type Action =
  | { type: "CREATE"; data: Todo }
  | { type: "UPDATE"; targetId: number }
  | { type: "DELETE"; targetId: number }
  | { type: "CLEAR" };
