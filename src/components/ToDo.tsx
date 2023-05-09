import {IToDo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";

export default function ToDo({ text, category, id }:IToDo) {

  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("i wanna go to:", event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex(toDO => toDO.id === id);
      const oldToDos = oldToDos[targetIndex];
      const newTpDos ={text: text, id: id, category: "name"}

      return oldToDos;
    })
  };

  return (
    <li>
      <span>{text}</span>
      { category !== "DOING" && (
        <button name = "DOING" onClick = {onClick}>Doing</button>
      )}
      { category !== "TO_DO" && (
        <button name = "TO_DO" onClick = {onClick}>To_Do</button>
      )}
      { category !== "DONE" && (
        <button name = "DONE" onClick = {onClick}>Done</button>
      )}
    </li>
  )
}



// 1. to do가 어디에 있는지 찾기
// 2.

// [
//     {
//         "text": "5",
//         "id": 1683631294942,
//         "category": "TO_DO"
//     },
//     {
//         "text": "4",
//         "id": 1683631293698,
//         "category": "TO_DO"
//     },
//     {
//         "text": "3",
//         "id": 1683631292976,
//         "category": "TO_DO"
//     },
//     {
//         "text": "2",
//         "id": 1683631291940,
//         "category": "TO_DO"
//     },
//     {
//         "text": "1",
//         "id": 1683631291133,
//         "category": "TO_DO"
//     }
// ]
