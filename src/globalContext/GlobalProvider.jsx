import { createContext } from 'react';
import { useGlobalProvider } from './GlobalContext';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const value = useGlobalProvider();

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}