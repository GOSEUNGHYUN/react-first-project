import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams(); //useParams이라는 함수를 사용하는거야
  //이 함수를 사용하면 React Router는 바로 이 변수(app.js에 있는 id)의 값을 넘겨준다.
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;

/*
<코드 챌린지>
Detail스크린에 로딩만들기
movie(json)가 state에있지않아. state에 넣어줘
return 에 Detail에다가 영화의 상세정보를 보여줘
이제 React.js는 다배웟어 몇 가지만 배우면 그다음에는 다 똑같아.
그 다음에는 html이랑 그걸 예쁘게 만드는게 다야
*/
