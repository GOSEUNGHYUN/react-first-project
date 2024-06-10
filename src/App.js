import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />{" "}
        {/* /movie/:id id가 Detail.js에서 useParams으로 내가 받게될 변수 이름이다. */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;

/* React Router는 다이나믹(동적) url을 지원해준다.
다이나믹하다는 것은 url에 변수를 넣을 수 있다는 의미이다.
http://localhost:3000/movie에서 http://localhost:3000/movie/:id(변수)를 입력하면 상세페이지를 보여준다.
 */
