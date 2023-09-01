import React, { useContext, useState } from "react";
import ls from "local-storage";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  const defaultUserImg =
    "https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3422df4a46d2c81c35bf4687a2fa9c52";
  const createUserAction = (e) => {
    setUser(e.target.value);
    console.log("user", user);
  };
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [watchList, setWatchList] = useState(ls.get("myList"));

  const addToList = (video) => {
    let myList;
    if (ls("myList") !== null) {
      myList = ls.get("myList");
      myList.push(video);
      ls.set("myList", myList);
      setWatchList(myList);
    } else {
      ls.set("myList", [video]);
    }
  };

  const removeFromList = (videoId) => {
    let myList = ls("myList");
    myList = myList.filter((item) => item.mediaId != videoId);
    ls.set("myList", myList);
    setWatchList(myList);
  };

  const thumbTypes = ["large-v", "small-v", "large-h", "small-h"];

  return (
    <StateContext.Provider
      value={{
        user,
        createUserAction,
        defaultUserImg,
        sideNavOpen,
        setSideNavOpen,
        accountModalOpen,
        setAccountModalOpen,
        searchOpen,
        setSearchOpen,
        thumbTypes,
        watchList,
        addToList,
        removeFromList,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
