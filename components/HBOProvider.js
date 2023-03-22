import React, { useContext, useState } from "react";

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
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
