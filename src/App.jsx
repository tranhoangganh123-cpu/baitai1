import Todolist from "./Todolist";
import { useState } from "react";
function App() {
  const [task, settask] = useState(["công việc 1", "công việc 2"]);
  function handleClick() {
    const newtask = `công việc ${task.length + 1}`;
    settask([...task, newtask]);
  }
  return (
    <>
      <button onClick={handleClick}>add</button>
      <Todolist tasks={task}></Todolist>
    </>
  );
}

export default App;
