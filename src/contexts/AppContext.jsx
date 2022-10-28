import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  const [headerActive, setHeaderActive] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const scroller = () => {
      const position = window.pageYOffset;
      if (position > 90) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };

    window.addEventListener("scroll", scroller);

    return () => {
      window.removeEventListener("scroll", scroller);
    };
  }, []);

  const value = {
    headerActive,
    setHeaderActive,
    headerScrolled,
    setHeaderScrolled,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
