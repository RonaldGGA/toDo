import connectDb from "./connectDb";

import { ToDo } from "./models";

export const addTodo = async (formData) => {
  try {
    connectDb();

    const name = Object.fromEntries(formData).name;
    console.log(name);
    const newTodo = new ToDo({
      name,
    });

    const res = await newTodo.save();
    console.log(res);
    console.log("saved");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "An error ocurred adding the todo" };
  }
};
