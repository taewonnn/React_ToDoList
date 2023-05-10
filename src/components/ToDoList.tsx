import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import {toDoSelector, toDoState} from "../atoms";
import ToDo from "./ToDo";


function ToDoList() {

  const toDos = useRecoilValue(toDoState);
  console.log(toDos);

  const selectorOutput = useRecoilValue(toDoSelector);
  console.log(selectorOutput);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => <ToDo {...toDo} key={toDo.id}/>)}
      </ul>
    </div>
  );
}

export default ToDoList;
