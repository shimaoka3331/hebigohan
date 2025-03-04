"use client";

import type { Todo } from "@/app/types/todos";
import React, { type FC } from "react";
import { TodoList } from "./components";

type Props = {
  todos: Todo[];
};

export const Todos: FC<Props> = (props: Props) => {
  const { todos } = props;

  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};
