// import TodoList from "@/components/TodoList";
// import TodoList from "@/components/TodoList";
import { Todos } from "@/features/Todos";
import { getTodos } from "@/service/getTodos";
// import Auth from "../components/Auth";

// async 非同期処理を行う関数
export default async function Home() {
  const res = await getTodos();
  console.log(res);

  return (
    <main className="container mx-auto py-8 px-4">
      {/* <Auth /> */}
      {/* <TodoList /> */}
      <h1 className="text-3xl font-bold mb-6">Todoリスト</h1>
      <Todos todos={res.data} />
    </main>
  );
}
