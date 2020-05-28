const { useState } = React;

function TodoApps() {
  return (
    <div>
      <header>
        <h1>todos</h1>
      </header>
      <Todos />
    </div>
  );
}

function Todos() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");
  const addNewTodo = (newTodo) => {
    if (newTodo === "") return;
    setTodoList([
      ...todoList,
      { id: Date.now(), content: newTodo, completed: false }
    ]);
  };
  const isAllCompleted =
    todoList.length > 0 &&
    !todoList.some(({ completed }) => completed === false);
  const toggleCompleteAll = () =>
    setTodoList(
      todoList.map((item) => ({ ...item, completed: !isAllCompleted }))
    );
  const toggleTodo = (id) => {
    const index = todoList.findIndex((item) => item.id === id);
    todoList[index].completed = !todoList[index].completed;
    setTodoList([...todoList]);
  };
  const removeTodo = (id) => {
    const index = todoList.findIndex((item) => item.id === id);
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };
  const clearCompleted = () =>
    setTodoList(todoList.filter(({ completed }) => completed === false));
  const displayList = todoList.filter(
    ({ completed }) => filter === "all" || completed === filter
  );
  const activeCount = todoList.filter(({ completed }) => completed === false).length;

  return (
    <div className="todos-wrapper">
      <header>
        <TodoForm
          onAdd={addNewTodo}
          onToggle={toggleCompleteAll}
          isChecked={isAllCompleted}
        />
      </header>
      {Boolean(todoList.length) && (
        <>
          <ul>
            {displayList.map((item) => (
              <li key={item.id}>
                <TodoItem
                  todo={item}
                  onToggle={toggleTodo}
                  onRemove={removeTodo}
                />
              </li>
            ))}
          </ul>
          <footer>
            <ToolBar
              count={activeCount}
              filter={filter}
              onFilter={setFilter}
              onClear={clearCompleted}
              enableClear={todoList.length > activeCount}
            />
          </footer>
        </>
      )}
    </div>
  );
}

function TodoForm({ onAdd, onToggle, isChecked }) {
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="checkbox"
          name="completeAll"
          checked={isChecked}
          onChange={onToggle}
        />
      </div>
      <div className="new-todo-wrapper">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
    </form>
  );
}
function TodoItem({ todo, onToggle, onRemove }) {
  const wrapperClass = ["todo-item"];
  todo.completed && wrapperClass.push("completed");

  return (
    <div className={wrapperClass.join(" ")}>
      <div className="todo-status">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
      </div>
      <div className="todo-content">{todo.content}</div>
      <div>
        <button type="button" onClick={() => onRemove(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
}
function ToolBar({ count, filter, onFilter, onClear, enableClear }) {
  return (
    <div className="tool-bar">
      <div>
        {count} item{count > 1 && "s"} left
      </div>
      <div className="btn-group">
        <button
          type="button"
          className={filter === "all" ? "active" : ""}
          onClick={() => onFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className={filter === false ? "active" : ""}
          onClick={() => onFilter(false)}
        >
          Active
        </button>
        <button
          type="button"
          className={filter === true ? "active" : ""}
          onClick={() => onFilter(true)}
        >
          Completed
        </button>
      </div>
      <div>
        {enableClear && (
          <button type="button" onClick={onClear}>
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<TodoApps />, document.querySelector("#main"));
