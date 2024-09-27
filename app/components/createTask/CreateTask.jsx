"use client";

import React, { useState } from "react";

const CreateTask = ({ onTaskCreated }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: taskName }),
      });
      if (response.ok) {
        setTaskName(""); // Limpiar el input
        onTaskCreated(); // Ejecutar fetchTodos para actualizar la lista
      }
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto items-center p-4 justify-center flex w-full max-w-[450px] h-[100px] bg-blue-600">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New Task"
        className="w-full  h-[50px] p-2 border border-gray-300 rounded mr-2"
      />
      <button type="submit" className="p-3 rounded bg-blue-300  h-[50px]">
        Add
      </button>
    </form>
  );
};

export default CreateTask;
