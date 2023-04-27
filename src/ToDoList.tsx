import {useState} from "react";
import {useForm} from "react-hook-form";


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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
};
export default function ToDoList() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  // register -> onChange / onBlur의 함수가 이미 들어있는 객
  // watch -> form의 입력값들의 변화를 관찰할 수 있게 해주는 함수
  // handleSubmit ->  validation

  const onValid = (data: any) => {
    console.log(data);
    // console.log(formState.errors);
  }

  // formState
  // console.log(register('toDo'));
  // console.log(watch());

  return (
    <div>
      <form
        style={{display: "flex", flexDirection: "column"}}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            }
          },
        )} placeholder="Email"/>
        <span> {errors?.email?.message as string}</span>
        <input
          {...register("firstName", {required: 'write First Name'})}
          placeholder="First Name"
        />
        <span> {errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", {required: 'write last Name'})}
          placeholder="Last Name"
        />
        <span> {errors?.lastName?.message as string}</span>
        <input
          {...register("username", {required: true, minLength: 10})}
          placeholder="Username"
        />
        <input
          {...register("password", {required: true, minLength: 5})}
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
