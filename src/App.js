import { useState, useEffect } from "react";

function Hello() {
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);
  useEffect(() => {
    //익명의 function을 만든다. 이 방법이 더 많이쓰이는방법이다.
    console.log("hi :)");
    return () => console.log("bye :("); //creanup function : destroy가 될 때 function을 실행 할 수 있다.
  }, []);
  return <h1>Hello</h1>; //hidden상태가 됬을 때 component를 숨기는 것이아니라 파괴된다.(콘솔창을 확인해보면 알 수 있다.) = destroy
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
