import Todo from "../../features/todo/Todo"

const TodoList = (todolist) => {
    const todos = todolist.length ? todolist.map(todo => (
        <Todo key={todo.id} todo={todo} />     
    )) : <p>No todos were found</p>
    
  return (
    <section>
        <ul>{todos}</ul>
    </section>
  )
}

export default TodoList