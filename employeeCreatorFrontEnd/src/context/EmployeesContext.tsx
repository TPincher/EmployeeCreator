import { createContext, useEffect, useState, ReactNode } from "react";
import { Employee, getAllEmployees } from "../services/employee-service";

interface StatusContextProps {
  children: ReactNode;
}

interface StatusContextValue {
  employees: Employee[];
  setEmployees: (updatedEmployees: Employee[]) => void;
}

export const StatusContext = createContext<StatusContextValue | null>(null);

const StatusContextProvider = ({ children }: StatusContextProps) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getAllEmployees()
      .then((data) => setEmployees(data))
      .catch(console.warn);
  }, []);

  return (
    <StatusContext.Provider value={{ employees, setEmployees }}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusContextProvider;
