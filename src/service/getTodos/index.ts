import type { GetTodosResponse } from "@/app/types/shared";

export const getTodos = async (): Promise<GetTodosResponse> => {
  const res = await fetch("http://localhost:3000/api/todos");
  //   if (!res.ok) {
  //     return;
  //   }
  const data = await res.json();
  return { data: data };
};
