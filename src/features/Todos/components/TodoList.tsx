import type { Todo } from "@/app/types/todos";
import { useToastContext } from "@/context/ToastContect";
import { CheckCircle, XCircle } from "lucide-react";
import React from "react";

type Props = {
  todos: Todo[];
};

export const TodoList = (props: Props) => {
  const { todos } = props;

  const { showToast } = useToastContext();

  if (todos.length === 0) {
    return (
      <div className="flex justify-center items-center p-8 border rounded-lg">
        <p className="text-gray-500">タスクがありません</p>
      </div>
    );
  }

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => {
          showToast("メッセージ", "error");
        }}
      >
        メッセージ
      </button>
      <div className="overflow-hidden rounded-md border border-gray-200">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left font-medium text-gray-500 w-[100px]">
                ID
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-500">
                タイトル
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-500 w-[150px]">
                ステータス
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr
                key={todo.id}
                className="border-b border-gray-200 last:border-0"
              >
                <td className="px-4 py-3 font-medium">{todo.id}</td>
                <td className="px-4 py-3">{todo.title}</td>
                <td className="px-4 py-3">
                  {todo.contents ? (
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle className="h-3.5 w-3.5" />
                      <span>完了</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                      <XCircle className="h-3.5 w-3.5" />
                      <span>未完了</span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
