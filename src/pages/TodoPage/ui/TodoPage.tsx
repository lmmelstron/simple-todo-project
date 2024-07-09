import { memo } from "react";
import { Todos } from "../../../widgets/Todos";
import cls from "./TodoPage.module.scss";

const TodoPage = memo(() => {
  return (
    <article className={cls.TodoPage}>
      <h1 className={cls.title}>Todo List</h1>
      <Todos />
    </article>
  );
});

export default TodoPage;
