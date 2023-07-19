import * as React from "react";

export interface IAddTodoProps {
  handleAddTodo: (todoContent: string) => void;
}

export default function AddTodo({ handleAddTodo }: IAddTodoProps) {
  const [todoContent, setTodoContent] = React.useState<string>("");
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.target.value);
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddTodo(todoContent);
    setTodoContent("");
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleOnSubmit}
        className="flex justify-between mt-7"
      >
        <input
          value={todoContent}
          type="text"
          onChange={handleOnchange}
          className="w-3/4
          rounded-lg border-1 text-md p-3 h-12 bg-white 
          border-yellow-400 border-2 
          focus:outline-none active:outline-none focus:border-yellow-600
          active:border-yellow-600
          "
        />
        <button
          type="submit"
          className="rounded-lg p-3 bg-green-500  flex align-center 
			justify-center text-white font-bold h-full 
			hover:bg-green-400 hover:shadow-md"
        >
          ADD{" "}
        </button>
      </form>
    </div>
  );
}

//tsdr
