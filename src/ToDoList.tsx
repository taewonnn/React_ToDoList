import { useState } from "react";
import { useForm } from "react-hook-form";



// useForm 사용 없이 상태관리
// export default function ToDoList () {
//
//   const [toDo, setToDo] = useState('');
//   const [toDOError, setToDoError] = useState('')
//   const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError('');
//     setToDo(value);
//   };
//
//   const onSubmit = (event : React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//     if(toDo.length < 10) {
//       return setToDoError("To do should be longer")
//     }
//     console.log('submit')
//   };
//
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           value={toDo}
//           onChange={onChange}
//           placeholder='Write a to do'
//         />
//         <button>Add</button>
//         {toDOError !== '' ? toDOError : null}
//       </form>
//     </div>
//   );
// }



// useForm 사용하여 상태 관리

export default function ToDoList () {



  const { register, watch } = useForm();
  // register -> onChange / onBlur의 함수가 이미 들어있는 객
  // watch -> form의 입력값들의 변화를 관찰할 수 있게 해주는 함수

  console.log(register('toDo'));
  console.log(watch());

  return (
    <div>
      <form >
        <input
          {...register('toDO')}
          placeholder='Write a to do'
        />
        <button>Add</button>
      </form>
    </div>
  )
}
