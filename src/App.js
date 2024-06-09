//npm install react-router-dom

function App() {
  return null;
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
*/
