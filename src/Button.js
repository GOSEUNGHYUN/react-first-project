import propTypes from "prop-types";
import styles from "./Button.module.css"; //create-react-app은 CSS 코드를 javascript object로 변환시켜준다.
function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: propTypes.string.isRequired,
};

export default Button;
