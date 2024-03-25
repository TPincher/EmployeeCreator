import { createContext, useState, ReactNode } from "react";
import { Employee } from "../services/employee-service";

interface ActiveEmployeeContextProps {
  children: ReactNode;
}

interface ActiveEmployeeContextValue {
  activeEmployee: Employee;
  setActiveEmployee: (updatedEmployees: Employee) => void;
}

export const ActiveEmployeeContext =
  createContext<ActiveEmployeeContextValue | null>(null);

const ActiveEmployeeContextProvider = ({
  children,
}: ActiveEmployeeContextProps) => {
  const [activeEmployee, setActiveEmployee] = useState<Employee>(null);

  return (
    <ActiveEmployeeContext.Provider
      value={{ activeEmployee, setActiveEmployee }}
    >
      {children}
    </ActiveEmployeeContext.Provider>
  );
};

export default ActiveEmployeeContextProvider;
