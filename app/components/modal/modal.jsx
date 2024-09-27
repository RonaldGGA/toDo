"use client";
import { Edit } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../../../components/ui/dialog"; // Ajusta la ruta del archivo según donde lo hayas guardado

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Modal = ({ setOpen, newName, setNewName, id, handlePatch }) => {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <Edit />{" "}
      </DialogTrigger>
      <DialogContent aria-describedby="dialog-description">
        <DialogTitle>Update your todo</DialogTitle>
        <Input
          id="dialog_description"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          type="text"
          placeholder="What's in your mind"
        />
        <DialogFooter>
          <DialogClose
            className="flex items-center justify-end mx-r gap-1"
            onClick={() => setOpen(false)}>
            <Button>Cancelar</Button>
            <Button onClick={() => handlePatch({ id, newName })}>
              Aceptar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
