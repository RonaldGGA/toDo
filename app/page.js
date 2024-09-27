"use client";
import Image from "next/image";
import CreateTask from "./components/createTask/CreateTask";
import ToDos from "./components/toDos/ToDos";
import { useEffect, useState } from "react";

export default function Home() {
  // const newtodo = async (formData) => {
  //   "use server";

  //   const name = Object.fromEntries(formData).name;
  //   try {
  //     const res = await fetch("/api/todos", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ name }), // Convertir el objeto a una cadena JSON
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const [todos, setTodos] = useState([]);

  const fetchToDos = async () => {
    console.log("me ejecute");
    const response = await fetch("http://localhost:3000/api/todos", {
      cache: "no-store",
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setTodos(data.data);
    } else {
      console.error(data.message);
    }
  };
  useEffect(() => {
    fetchToDos();
  }, []); // Solo se ejecuta una vez al montar el componente

  const handleDelete = async (id) => {
    try {
      const res = await fetch("/api/todos/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        fetchToDos();
        // Actualiza la lista de tareas después de la eliminación
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePatch = async (props) => {
    const { newName, id } = props;
    console.log(JSON.stringify({ newName, id }));
    if (!newName || !id) {
      console.log("Invalid name or id");
      return;
    }
    try {
      const res = await fetch("/api/todos/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newName, id }),
      });
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        fetchToDos();
        // Actualiza la lista de tareas después de la eliminación
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex-col min-h-screen gap-5 flex justify-center items-center ">
      <h1 className="text-4xl font-bold">
        CRUD <span className="text-blue-700">ToDo</span> Practice
      </h1>
      <CreateTask onTaskCreated={fetchToDos} />
      <ToDos
        handlePatch={handlePatch}
        todos={todos}
        fetchToDos={fetchToDos}
        handleDelete={handleDelete}
      />
    </div>
  );
}
