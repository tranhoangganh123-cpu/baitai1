import Todoitem from "./Todoitem";
export default function Todolist({ tasks }) {
  return (
    <ul>
      {tasks.map((t, i) => {
        return <Todoitem key={i} task={t}></Todoitem>;
      })}
    </ul>
  );
}
