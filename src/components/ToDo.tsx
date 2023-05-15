import {Categories, IToDo, toDoState} from "../atoms";
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
      const newToDos ={text: text, id: id, category: name as any };

      return [...oldToDos.slice(0, targetIndex), newToDos, ...oldToDos.slice(targetIndex + 1)];
    })
  };

  return (
    <li>
      <span>{text}</span>
      { category !== Categories.DOING && (
        <button name = {Categories.DOING + ""} onClick = {onClick}>Doing</button>
      )}
      { category !== Categories.TO_DO && (
        <button name = {Categories.TO_DO + ""} onClick = {onClick}>To_Do</button>
      )}
      { category !== Categories.DONE && (
        <button name = {Categories.DONE + ""} onClick = {onClick}>Done</button>
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


// 배열의 원소 교체 방법
// const food = ['pizza', 'mango', 'kimchi', 'kimbab']

// mango -> gam으로 바꾸고 싶을 떄

// 1. mango의 위치를 찾기

// 2. 배열을 두 가지로 나눠!  망고 이전의 배열, 망고 이후의 배열
// const front = ['pizza']    const back = ['kimchi', 'kimbab']

// 이 때 mango를 삭제하고 두 배열로 나누는 방법은 ?? -> slice() 사용;
// const front = food.slice(0,1)     const back = food.slice(2,4)

// 3. finalPart = [...front, "gam", ...back]


// [...food.slice(0,1), "gam", ...food.slice(2,4)]
