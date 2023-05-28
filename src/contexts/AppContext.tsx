import { createContext, useState, ReactNode } from "react";

interface AppContextProps {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token") || null
  );

  const setTokenInLocalStorage = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const removeTokenFromLocalStorage = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const contextValue: AppContextProps = {
    token,
    setToken: setTokenInLocalStorage,
    removeToken: removeTokenFromLocalStorage,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };
