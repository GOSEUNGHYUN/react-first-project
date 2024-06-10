import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  //{ id, coverImg, title, summary, genres } = props(object) 하나의 오브젝트다.
  //function Movie(props) {
  //컴포넌트를 렌더링 한다는 것은 실질적으로는 함수를 불러오는 것이다.
  //<Movie /> == Movie({object}) Movie함수를 호출해서 그 안에 이런식으로 object들을 전부 넘겨주고 있는것이다.
  //props는 object일 뿐이고, 우리는 그걸 열어서 item을 꺼내 쓰는 것이다.

  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
