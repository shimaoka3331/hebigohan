import type { Todo } from "./todos";

export interface ApiResponse<T> {
  data: T;
}

export type GetTodosResponse = ApiResponse<Todo[]>;
