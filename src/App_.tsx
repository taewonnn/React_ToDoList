import React from 'react';
import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";
import {useRecoilState, useRecoilValue} from "recoil";
import {hourSelector, minuteState} from "./atoms";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;


// Get Selector
function App() {

  // useRecoilState => atom의 값에 더해서 atom을 수정할 함수까지 준다!!
  const [minutes, setMinutes] = useRecoilState(minuteState)

  const hours = useRecoilValue(hourSelector);

  const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
    console.log(+event.currentTarget.value)
  }

  return (

    <>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes"/>
      <input  value={hours} type="number" placeholder="Hours"/>
    </>
  );
}

export default App;



// 80번째 줄 앞에 +를 붙인 이유? => 그냥 event.currentTarget.value는 string임 근데, atom에 정의해둔 건 0으로 Number이어야 한다.
// string -> number로 바꿀 떄, 앞에 +를 붙여주면됨!!  ex. +"1" => number


// selector - set
// state를 set하는 것을 도와줌!
