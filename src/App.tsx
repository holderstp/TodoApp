import React, { useEffect, useId, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";
import { ITodoItem } from "./types/todoType";
import { v4 as uuidv4 } from "uuid";
import RerenderComponent from "./Components/RerenderComponent";
import { json } from "stream/consumers";

function App() {
  const [name, setName] = useState("");
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    {
      id: "1",
      content: "Todo 1",
      isCompleted: true,
    },
    {
      id: "2",
      content: "Todo 2",
      isCompleted: false,
    },
    {
      id: "3",
      content: "Todo 3",
      isCompleted: true,
    },
  ]);
  const handleAddTodo = (todoContent: string) => {
    console.log("In App.tsx", todoContent);
    const newTodoItem: ITodoItem = {
      content: todoContent,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodoList([...todoList, newTodoItem]);
    //luu data vao local storage
    localStorage.setItem("name", JSON.stringify(todoList));
  };
  const handleDel = (id: string) => {
    console.log("in app.tsx", id);
    const newListTodo = todoList.filter((item) => item.id !== id);
    setTodoList(newListTodo);
  };
  const handleTog = (completed: boolean, idex: number) => {
    // console.log(completed);
    const newListToggle = [...todoList];
    // dùng spread ???

    newListToggle[idex].isCompleted = !completed;
    setTodoList(newListToggle);
    console.log(todoList);
  };

  useEffect(() => {
    console.log("todoList -----", todoList);
    const storedName = localStorage.getItem("name");
    if (storedName) {
      console.log("day la stored name", JSON.parse(storedName));
      let reload = JSON.parse(storedName);
      // Nếu có, khôi phục dữ liệu vào state

      setTodoList(reload);
    }
  }, []);
  // useEffect(() => {
  //   // Kiểm tra xem có dữ liệu đã lưu trong Local Storage hay không
  //   const storedName = localStorage.getItem("name");
  //   if (storedName) {
  //     // Nếu có, khôi phục dữ liệu vào state
  //     setName(storedName);
  //     setTodoList([...todoList,name]);
  //   }
  // }, []);

  return (
    <div className=" flex-col w-[800px] mx-auto h-[800px]">
      <Header />

      <AddTodo handleAddTodo={handleAddTodo} />
      {/* <RerenderComponent /> */}

      <TodoList
        handleDel={handleDel}
        todoList={todoList}
        handleTog={handleTog}
      />
    </div>
  );
}

export default App;
