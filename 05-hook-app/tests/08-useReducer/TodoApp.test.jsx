import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("pruebas en <TodoApp/>", () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: "todo #1", done: false },
      { id: 2, description: "todo #2", done: true },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });
  test("debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);
    expect(screen.getByText("todo #1")).toBeTruthy();
    expect(screen.getByText("todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
