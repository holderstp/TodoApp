import * as React from "react";
import { ITodoItem } from "../../types/todoType";
import { useEffect, useState } from "react";

export interface ITodoListProps {
  todoList: ITodoItem[];
  handleDel: (id: string) => void;
  handleTog: (completed: boolean, id: number) => void;
}

export default function TodoList({
  todoList,
  handleDel,
  handleTog,
}: ITodoListProps) {
  const [filteredTodoList, setFilteredTodoList] = useState(todoList);

  useEffect(() => {
    setFilteredTodoList(todoList);
  }, [todoList]);

  const handleDeleteTodo = (id: string) => {
    handleDel(id);
  };

  const handleToggle = (completed: boolean, id: number) => {
    handleTog(completed, id);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;
    let newTodoList: ITodoItem[] = [];

    if (filterValue === "all") {
      newTodoList = todoList;
    } else if (filterValue === "todo") {
      newTodoList = todoList.filter((item) => !item.isCompleted);
    } else if (filterValue === "done") {
      newTodoList = todoList.filter((item) => item.isCompleted);
    }

    setFilteredTodoList(newTodoList);
  };

  return (
    <div className="rounded-lg bg-yellow-100 p-8 border-1 shadow-md mx-auto mt-7">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold text-yellow-700">List</p>
        <div className="custom-select  ">
          <select
            id="sel"
            onChange={handleFilterChange}
            className="text-md border-2 border-yellow-600 p-1 rounded-lg"
          >
            <option value="all">All</option>
            <option value="todo">Todo</option>
            <option value="done">Done</option>
          </select>
        </div>
      </div>
      {filteredTodoList.map((item, index) => (
        <div key={item.id} className="flex space-y-4 items-center">
          <div
            style={{
              textDecoration: `${item.isCompleted ? "line-through" : "none"}`,
              fontFamily: "Pangolin, cursive",
            }}
            className="text-2xl duration-200  w-2/3 "
          >
            {item.content}
          </div>
          <div className="flex w-1/3 justify-between">
            <button
              onClick={() => handleDeleteTodo(item.id)}
              className="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => handleToggle(item.isCompleted, index)}
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Change Status
            </button>
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}
