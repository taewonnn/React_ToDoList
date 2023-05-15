import {useRecoilState, useRecoilValue} from "recoil";
import CreateToDo from "./CreateToDo";
import {Categories, categoryState, toDoSelector} from "../atoms";
import ToDo from "./ToDo";
import React from "react";


function ToDoList() {

  const toDos = useRecoilValue(toDoSelector);
  const selectorOutput = useRecoilValue(toDoSelector);
  console.log(selectorOutput);

  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
    console.log(event.currentTarget.value);
  }

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
  }

export default ToDoList;



// recoil의 selector 활용
