import { createContext, useState, ReactNode } from "react";
import UserInterface from "../interfaces/UserInterface";

interface AppContextProps {
  token: string | null;
  user: UserInterface | null;
  setSession: (token: string, user: UserInterface) => void;
  clearSession: () => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );

  const userLocalStorage = localStorage.getItem("user");
  const [user, setUser] = useState<UserInterface | null>(
    userLocalStorage ? JSON.parse(userLocalStorage) : null
  );

  const setUserInLocalStorage = (user: UserInterface) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const setTokenInLocalStorage = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const removeTokenFromLocalStorage = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const setSession = (token: string, user: UserInterface) => {
    setTokenInLocalStorage(token);
    setUserInLocalStorage(user);
  };

  const clearSession = () => {
    removeTokenFromLocalStorage();
    removeUserFromLocalStorage();
  };

  const contextValue: AppContextProps = {
    token,
    user,
    setSession,
    clearSession,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
