const RerenderComponent = () => {
  let a = document.getElementById("sel");

  return (
    <div className="flex space-x-20">
      <h3>List</h3>
      <div className="custom-select ">
        <select id="sel">
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
};
export default RerenderComponent;
