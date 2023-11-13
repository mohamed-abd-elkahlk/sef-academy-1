import style from "./style.css";

const LoginButton = (props) => {
  return <button className={style}>{props.value}</button>;
};

export default LoginButton;
