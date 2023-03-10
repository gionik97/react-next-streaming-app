import { useStateContext } from "components/HBOProvider";

const Login = () => {
  const globalState = useStateContext();

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who Is Watching?</span>
      </div>

      <div className="login-user__form">
        <div className="login-user__user-box">
          <img
            className="login-user__user-img"
            src="https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3422df4a46d2c81c35bf4687a2fa9c52"
            alt=""
          />
          <div className="login-user__user-name">{globalState.test}</div>
        </div>
      </div>

      <div className="login-user__user-buttons">
        <button className="login-user__adult">Add Adult</button>
        <button className="login-user__kid">Add Kid</button>
      </div>
    </div>
  );
};

export default Login;
