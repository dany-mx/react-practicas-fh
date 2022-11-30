import { useTodos } from "../hooks/useTodos";
import { TodoAdd, TodoList } from "./";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp {todosCount}
        <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleTodo} />
        </div>
      </div>
    </>
  );
};
