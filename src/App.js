import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//npm i react-router-dom@5.3.0
//BrowserRouter는 URL의 생김새가 보통 웹사이트 처럼 생겼다. http://localhost:3000/movie
//다른 Router종류인 HashRouter를 사용하면, http://localhost:3000/movie#/movie 이렇게 달라진다.
import Home from "./routes/Home";
import Detail from "./routes/Detail";

//Router를 먼저 렌더링 해주고 그 안에 들어가는건 우리가 유저에게 보여주고 싶은 것들이야.
//유저가 있는 url에 따라서 말이야 여기에 Switch 컴포는트를 넣어준 이유는 한번에 하나의 Route만 렌더링 하기 위해서야
//알겠지? React Router에서는 네가 원한다면 두개의 Route를 한번에 렌더링할수있거든 우리는 한번에 Route 하나만 렌더링 되기를원해 그렇지?
//우리가 switch컴포넌트를 사용하는 이유야.
/*
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;

/*
이제 App.js는 router를 render하게된다.
router는 URL을 보고있는 component고, 
우리가 여기있다면(http://localhost:3000/) router는 우리에게 Home component를 보여주게 될거야
그리고 만약우리가 이걸 http://localhost:3000/movies/123이런식으로 바꾼다면
router는 우리에게 Detail component를 보여주게될거야

그래서 App.js는 이제 새로운 component를 render하게 될텐데 다음영상에서 소개한다.
그리고 이 새로운 component는 URL을 보고 있는거고 URL에 따라서 
우리는 Home을 보여주거나 Detail을 보여주거나 할거야.

Switch가 하는 일은 Route를 찾는건데 
Route는 여기 이 URL(http://localhost:3000/movies/123)을 의미해 알겠지?
그리고 Route를 찾으면 컴포넌트를 렌더링해
*/
