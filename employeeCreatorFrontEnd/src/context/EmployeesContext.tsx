import { createContext, useEffect, useState, ReactNode } from "react";
import { Employee, getAllEmployees } from "../services/employee-service";

interface EmployeesContextProps {
  children: ReactNode;
}

interface EmployeesContextValue {
  employees: Employee[];
  setEmployees: (updatedEmployees: Employee[]) => void;
}

export const EmployeesContext = createContext<EmployeesContextValue | null>(
  null
);

const EmployeesContextProvider = ({ children }: EmployeesContextProps) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    getAllEmployees()
      .then((data) => setEmployees(data))
      .catch(console.warn);
  }, []);

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesContextProvider;
