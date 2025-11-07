import "./App.css";
import Header from "./Header";
import AddingItemContainer from "./AddingItemContainer";
import TodoColumns from "./TodoColumns";
import {useState} from react;
import DisplayTodoItems from "./DisplayTodoItems";
function App() {
  let arr = [
    { task: "Eat food", due: "10/11/25" },
    { task: "Create PPT", due: "11/11/25" },
    { task: "Solve DSA", due: "12/11/25" },
    { task: "Upload project report", due: "13/11/25" },
  ];

  let [tasks, setTasks] = useState();


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
