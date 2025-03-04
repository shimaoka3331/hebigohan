// /app/api/example/route.ts
import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { data, error } = await supabase.from("todos").select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
};
