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

  const { register, watch, handleSubmit, formState } = useForm();

  // register -> onChange / onBlur의 함수가 이미 들어있는 객
  // watch -> form의 입력값들의 변화를 관찰할 수 있게 해주는 함수
  // handleSubmit ->  validation

  const onValid = (data:any) => {
    console.log(data);
    console.log(formState.errors);
  }

  console.log(register('toDo'));
  console.log(watch());

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  )
}
