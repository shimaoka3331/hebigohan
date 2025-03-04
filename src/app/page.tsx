// import TodoList from "@/components/TodoList";
import { Todos } from "@/features/Todos";
import { getTodos } from "@/service/getTodos";
// import Auth from "../components/Auth";

const Home = async () => {
  const res = await getTodos();
  console.log(res);

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Todoリスト</h1>
      <Todos todos={res.data} />
    </main>
  );
};

export default Home;
