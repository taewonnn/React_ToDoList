import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import {toDoState} from "../atoms";
import ToDo from "./ToDo";


function ToDoList() {

  const toDos = useRecoilValue(toDoState);

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
