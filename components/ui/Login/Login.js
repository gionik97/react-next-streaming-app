import { useState, useEffect } from "react";
import { useStateContext } from "components/HBOProvider";
import { useRouter } from "next/router";
import ls from "local-storage";
import { useMounted } from "../../Hooks/useMounted";

const Login = () => {
  const globalState = useStateContext();
  const router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false);
  let { hasMounted } = useMounted();

  let users = ls("users") !== null ? ls("users") : [];

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false);
    }
    console.log("load effect", users);
  }, []);

  console.log("declared users", users);
  const selectUser = (id) => {
    ls("activeUID", id);
    router.push("/");
  };

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            className="login-user__user-box"
            onClick={() => selectUser(user.id)}
            key={user.id}
          >
            <img
              className="login-user__user-img"
              src="https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3422df4a46d2c81c35bf4687a2fa9c52"
              alt=""
            />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        );
      });
    }
  };

  const createUser = () => {
    router.push("/");
  };

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who Is Watching?</span>
      </div>

      <div className="login-user__form">{hasMounted ? showUsers() : ""}</div>

      <div className="login-user__user-buttons">
        <button className="login-user__adult" onClick={createUser}>
          Create User
        </button>
      </div>
    </div>
  );
};

export default Login;
