"use client"; // Asegúrate de que este componente sea un Client Component

import React, { useEffect, useState } from "react";
import SingleToDo from "../singleToDo/SingleToDo";
// @refresh reset
const ToDos = ({ todos, fetchTodos, handleDelete, handlePatch }) => {
  return (
    <div className="mt-5 w-full max-w-[450px] gap-2 flex flex-col">
      {todos && todos.length > 0 ? (
        todos?.map((item) => (
          <SingleToDo
            handlePatch={handlePatch}
            id={item._id}
            handleDelete={() => handleDelete(item._id)}
            onDelete={fetchTodos}
            key={item._id}
            name={item.name}
          />
        ))
      ) : (
        <div>Loading... or no todos added</div>
      )}
    </div>
  );
};

export default ToDos;
