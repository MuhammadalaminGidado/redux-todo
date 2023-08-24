import { useSelector } from "react-redux";
import TodoList from "./components/todo/TodoList";
import { selectTodos } from "./features/todo/todoSlice";



const App = () => {
  const todolist = useSelector(selectTodos)
  console.log(todolist) 
  return (
    <>
      <header>
        <h2>ToDo List</h2>
      </header>

      <section>
        <TodoList todolist={todolist} />
      </section>
    </>
  );
}

export default App