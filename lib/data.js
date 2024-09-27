import { ToDo } from "./models";
import connectDb from "./connectDb";
export const getToDos = async () => {
  try {
    connectDb();
    const todos = await ToDo.find();
    console.log(todos);
    console.log("searched");
    return todos;
  } catch (error) {
    console.error(error);
    return { error: "An error ocurred fetching the todos" };
  }
};
