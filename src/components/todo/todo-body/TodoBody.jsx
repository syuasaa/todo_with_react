import TodoBodyItem from "./todo-body-item/TodoBodyItem";

const TodoBody = ({ todos, setTodos }) => {
  return (
    <div className="todo-body">
      {todos &&
        todos.map((item) => {
          return (
            <>
              {item.isVisible && (
                <TodoBodyItem key={item.id} item={item} setTodos={setTodos} />
              )}
            </>
          );
        })}
    </div>
  );
};

export default TodoBody;
