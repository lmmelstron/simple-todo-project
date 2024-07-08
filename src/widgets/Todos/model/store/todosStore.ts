import { makeAutoObservable } from "mobx";
import { ITodo, TodoStatus } from "@entities/Todo";

export class TodosStore {
  todos: ITodo[] = [];
  filter: TodoStatus = TodoStatus.ALL;

  constructor(todos?: ITodo[]) {
    makeAutoObservable(this);
    if (todos) this.todos = todos;
  }

  get activeTodosCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  get displayedTodos() {
    return this.todos.filter((todo) => {
      switch (this.filter) {
        case TodoStatus.ALL:
          return true;
        case TodoStatus.ACTIVE:
          return !todo.completed;
        case TodoStatus.COMPLETED:
          return !!todo.completed;
        default:
          return false;
      }
    });
  }

  addTodo = (value: string) => {
    const newTodo: ITodo = {
      id: crypto.randomUUID(),
      completed: false,
      value,
    };
    this.todos.push(newTodo);
  };

  toggleStatus = (id: string) => {
    const index = this.todos.findIndex((todo) => todo.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  };

  changeFilter = (value: TodoStatus) => {
    this.filter = value;
  };

  clearCompleted = () => {
    this.todos = this.todos.filter((todo) => !todo.completed);
  };
}
