import { createContext, useEffect, useState, ReactNode } from "react";

interface ConsoleMessageContextProps {
  children: ReactNode;
}

interface ConsoleMessageContextValue {
  consoleMessage: string[];
  setConsoleMessage: (updatedConsoleMessage: string[]) => void;
}

export const ConsoleMessageContext =
  createContext<ConsoleMessageContextValue | null>(null);

const ConsoleMessageContextProvider = ({
  children,
}: ConsoleMessageContextProps) => {
  const [consoleMessage, setConsoleMessage] = useState<string[]>([
    "Employees loaded",
  ]);

  useEffect(() => {}, [consoleMessage]);

  return (
    <ConsoleMessageContext.Provider
      value={{ consoleMessage, setConsoleMessage }}
    >
      {children}
    </ConsoleMessageContext.Provider>
  );
};

export default ConsoleMessageContextProvider;
