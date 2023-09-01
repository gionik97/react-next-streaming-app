import { useStateContext } from "components/HBOProvider";
import ls from "local-storage";
import { useRouter } from "next/router";
import { v4 } from "uuid";

export default function CreateUser() {
  const globalState = useStateContext();
  const router = useRouter();

  // console.log("globalstate", globalState);
  const saveUser = () => {
    let users = [],
      user;

    if (ls("users") < 1) {
      user = {
        id: v4(),
        user: globalState.user,
        myListID: [],
      };
      users.push(user);
      ls("users", users);
      router.push("/login");
    } else {
      users = ls("users");
      user = {
        id: v4(),
        user: globalState.user,
        myListID: [],
      };
      users.push(user);
      ls("users", users);
      router.push("/login");
    }
  };

  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who Is Watching?</span>
        </div>

        <div className="create-user__form">
          <img
            className="create-user__user-img"
            src={globalState.defaultUserImg}
            alt=""
          />
          <div className="create-user__input-group">
            <label>Name</label>
            <input
              type="text"
              className="create-user__inputText"
              value={globalState.user}
              onChange={globalState.createUserAction}
            />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(17,27,176)",
                  background:
                    "linear-gradient(152deg, rgba(17,27,176,1) 0%, rgba(137,14,139,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color"
                style={{
                  background: "rgb(17,27,176)",
                  background:
                    "linear-gradient(152deg, rgba(17,27,176,1) 0%, rgba(196,0,199,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color"
                style={{
                  background: "rgb(255,80,80)",
                  background:
                    "linear-gradient(152deg, rgba(255,80,80,1) 0%, rgba(101,0,157,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color"
                style={{
                  background: "rgb(255,80,80)",
                  background:
                    "linear-gradient(152deg, rgba(255,80,80,1) 0%, rgba(0,76,157,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color"
                style={{
                  background: "rgb(255,160,80)",
                  background:
                    "linear-gradient(152deg, rgba(255,160,80,1) 0%, rgba(119,0,140,1) 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="create-user__user-buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save" onClick={saveUser}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
