import { memo } from "react";
import { Todos } from "../../../widgets/Todos";

const TodoPage = memo(() => {
  return (
    <article>
      <h1>Todo List</h1>
      <Todos />
    </article>
  );
});

export default TodoPage;
