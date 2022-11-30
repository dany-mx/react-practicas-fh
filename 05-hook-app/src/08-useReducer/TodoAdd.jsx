import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, handleChange, handleReset } = useForm({
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 2) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo && onNewTodo(newTodo);
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
