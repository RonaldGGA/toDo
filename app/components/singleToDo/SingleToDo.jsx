"use client";

import React, { useState } from "react";
import { Delete, Edit } from "lucide-react"; // Importar los iconos
import Modal from "../modal/modal";

const SingleToDo = ({ name, id, onDeleted, handleDelete, handlePatch }) => {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState(name);

  // const handleDelete = async () => {
  //   try {
  //     const response = await fetch("/api/todos/", {
  //       // Agrega la ID a la URL
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ id }),
  //     });
  //     console.log(res);
  //     if (response.ok) {
  //       onDeleted(); // Llama a onDeleted
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="px-2 py-2 flex items-center justify-between w-full border-2 border-gray-500 rounded">
      <p className="font-medium text-lg">{name}</p>
      <div className="flex gap-2 items-center justify-center">
        <button type="button" onClick={handleDelete}>
          <Delete />
        </button>
        <Modal
          handlePatch={handlePatch}
          setOpen={setOpen}
          id={id}
          newName={newName}
          setNewName={setNewName}
          open={open}
        />
      </div>
    </div>
  );
};

export default SingleToDo;
