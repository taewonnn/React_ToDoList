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
  extraError?: string;
};
export default function ToDoList() {

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    setError
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  // register -> onChange / onBlur의 함수가 이미 들어있는 객
  // watch -> form의 입력값들의 변화를 관찰할 수 있게 해주는 함수
  // handleSubmit ->  validation

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        {message: "Password are not the same"},
        {shouldFocus: true}
      );
    }
    // setError("extraError", { message: "Server offline." });
  };
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
          {...register("firstName", {
            required: 'write First Name',
            validate: {
              noDaram: (value) =>
                value.includes("daram") ? "no daram allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span> {errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", {required: "write here"})}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {required: "write here", minLength: 10})}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {required: "write here", minLength: 5})}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
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
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  )
}



// useForm

// register / handleSubmit 제공

// Register
// regitster 함수를 form 태그 안에 있는 모든 input에서 호출!
// 검사 옵션 설정 가능

//error 객체는 formState 안에 있어   (formState은 form의 state들이 들어 있고 그 중에 error도 있는 것)


