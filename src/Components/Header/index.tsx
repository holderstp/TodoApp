import { useEffect } from "react";

function Header() {
  return (
    <div>
      <p className="text-2xl " style={{ fontFamily: "Pangolin, cursive" }}>
        Let's add what you have to do! Fill the input and click button or
        "Enter" to add a new task into the list. To mark as completed, just
        click directly to the task
      </p>
    </div>
  );
}
export default Header;
