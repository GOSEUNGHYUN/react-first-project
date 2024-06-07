import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    //toDo를 받아와서 새로운 toDO의 array로 return하고 있는것이다.
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/*x
      <ul>
        {toDos.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      */}

      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/*
      toDos.map()
      map은 이 안에 함수를 넣을수 있도록 해주는데
      이 함수는 array의 모든 item에 대해서 실행하게된다.
      여기에서 무엇을 return하던지간에 return한 값이 새로운 array에 들어가게 된다.
      item이 6개가 있다면 내가 적은 함수가 6번 실행된다.

      map은 함수의 첫번째 argument로 현재의 item을 가져 올 수 있다.
      [].map((item) => item.toUpperCase()); 대문자로 바뀐 새로운 array
      item의 이름은 직접 정할 수 있다. tomato, apple, ...
      */}
    </div>
  );
}

export default App;
