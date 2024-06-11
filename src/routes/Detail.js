import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState([]);

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setPage(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? <h1>loading...</h1> : <h1>{page.data.movie.title_long}</h1>}
    </div>
  );
}

export default Detail;

//npm i gh-pages 설치
//package.json에 build라는 script가 있다.
//이 script를 실행하면 우리 웹사이트의 production ready code를 생성하게된다.
//production ready란 코드가 압축되고 모든게 최적화 된다는 의미이다.
//build를 실행시킨다.(npm run build)
//#7.7 1:18
