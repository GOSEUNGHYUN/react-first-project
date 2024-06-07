import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);

  useEffect(() => {
    console.log("나는 한번만 실행돼요.");
  }, []);
  useEffect(() => {
    console.log("나는 '키워드'가 변화할 때만 실행돼요.");
    /*if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }*/
  }, [keyword]); //[keyword]는 keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것이다.

  useEffect(() => {
    console.log("나는 '카운터'가 변화할 때만 실행돼요.");
  }, [counter]);

  useEffect(() => {
    console.log("나는 키워드,카운터 둘다 지켜보고 있고 변화할 때 실행돼요.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword} //keyword를 가져와서 input의 value로 사용하면 우리가 원할 때 이 input을 조작할 수 있다.
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
