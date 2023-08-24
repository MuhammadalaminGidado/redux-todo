const Todo = (todo) => {
  return (
    <li key={todo.id}>
      <p>{todo.content}</p>
      <span>
        <input type="checkbox" name="todo" id={todo.id} />
      </span>
    </li>
  )
}

export default Todo