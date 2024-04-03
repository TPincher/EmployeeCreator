import { createContext, useState, ReactNode, useEffect } from "react";

interface ModeContextProps {
  children: ReactNode;
}

interface ModeContextValue {
  mode: string;
  setMode: (updatedMode: string) => void;
}

export const ModeContext = createContext<ModeContextValue | null>(null);

const ModeContextProvider = ({ children }: ModeContextProps) => {
  const [mode, setMode] = useState<string>("");

  useEffect(() => {
    setMode("");
  }, []);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
