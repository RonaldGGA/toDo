import connectDb from "@/lib/connectDb";
import { ToDo } from "@/lib/models";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import React from "react";

export const GET = async (request) => {
  try {
    try {
      await connectDb();
    } catch (error) {
      return NextResponse.json({ message: "DB error", success: false, error });
    }
    const todos = await ToDo.find();
    if (!todos)
      return NextResponse.json({
        message: "No todos found",
        data: [],
        success: true,
      });
    else if (todos && todos.length > 0) {
      return NextResponse.json({
        message: "todos found",
        data: todos,
        success: true,
      });
    }
    return NextResponse.json({
      message: "Something happened",
      success: false,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something happened", success: false, error },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  const body = await request.json(); // Obtener el cuerpo de la solicitud
  const { name } = body;
  console.log(name);
  if (!name) {
    return NextResponse.json({
      message: "We need a valid name",
      success: false,
    });
  }
  try {
    await connectDb();
    const newTodo = new ToDo({
      name,
    });

    const res = await newTodo.save();
    console.log(res);
    return NextResponse.json({
      message: "todo saved",
      data: res,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "internal error", success: false, error: error.message },
      { status: 500 }
    );
  }
};

export const DELETE = async (request) => {
  const body = await request.json();
  const { id } = body;
  if (!id) {
    return NextResponse.json({
      message: "We need a valid id",
      success: false,
    });
  }

  try {
    await connectDb();
    const res = await ToDo.findByIdAndDelete(id);
    console.log(res);
    return NextResponse.json({
      message: "todo deleted",
      data: res,
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "internal error", success: false, error: error.message },
      { status: 500 }
    );
  }
};

export const PATCH = async (request) => {
  const body = await request.json();
  console.log(body.newName);
  const { id, newName } = body;
  const name = newName;
  if (!id) {
    return NextResponse.json({
      message: "We need a valid id",
      success: false,
    });
  } else if (!name) {
    return NextResponse.json({
      message: "We need a valid name",
      success: false,
    });
  }
  try {
    await connectDb();
    // Convierte el ID a un ObjectId

    const res = await ToDo.findByIdAndUpdate(id, { name });
    console.log(res);
    if (res) {
      return NextResponse.json({
        message: "Succesfully updated",
        data: res,
        success: true,
      });
    }
    return NextResponse.json({
      message: "Something happened",
      data: res,
      success: false,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "internal error", success: false, error: error.message },
      { status: 500 }
    );
  }
};
