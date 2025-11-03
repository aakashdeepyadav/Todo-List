import "./App.css";
import Header from "./Header";
import AddingItemContainer from "./AddingItemContainer";
import TodoColumns from "./TodoColumns";
import DisplayTodoItems from "./DisplayTodoItems";
function App() {
  let arr = ["Eat food", "Create PPT", "Solve DSA", "Upload project report"];

  return (
    <>
      <div className="container">
        <Header />
        <TodoColumns />
        <AddingItemContainer />
        <DisplayTodoItems tasks={arr} />
      </div>
    </>
  );
}

export default App;
