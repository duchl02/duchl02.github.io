const ListTodo = (props) => {
    let todo = props.todos
    let deleteTodo = props.deleteTodo
    const handleDeleteTodo =(age)=>{
        deleteTodo(age)
    }
  return (
    <>
      {todo.length > 0 &&
        todo &&
        todo.map((todo, id) => {
          return (
            <div key={id}>
              {" "}
              {todo.name} - {todo.age}
              <button onClick={() =>handleDeleteTodo(todo.age)}>delete</button>
            </div>
          );
        })}
    </>
  );
};
export default ListTodo;
