import { supabase } from "../utils/supabase";

export default async function TodoList() {
    const { data: todos } = await supabase.from("todos").select();

    return <pre>{JSON.stringify(todos, null, 2)}</pre>
}