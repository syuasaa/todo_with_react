const TodoStatistics = ({ todos, setTodos }) => {
  return (
    <>
      <h1>
        {todos.filter((item) => item.isDone).length}/{todos.length}
      </h1>
      <button
        onClick={() => {
          setTodos([]);
        }}
      >
        Remove all
      </button>
      <button
        onClick={() => {
          setTodos((prev) =>
            prev.map((item) => {
              if (item.isDone) {
                item.isVisible = !item.isVisible;
              }
              return item;
            })
          );
        }}
      >
        Hide Completed
      </button>
    </>
  );
};

export default TodoStatistics;
