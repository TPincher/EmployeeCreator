import { createContext, useEffect, useState, ReactNode } from "react";
import {
  employmentType,
  getAllEmploymentTypes,
} from "../services/type-service";

interface EmploymentTypesContextProps {
  children: ReactNode;
}

interface EmploymentTypesContextValue {
  employmentTypes: employmentType[];
  setEmploymentTypes: (updatedEmploymentTypes: employmentType[]) => void;
}

export const EmploymentTypesContext =
  createContext<EmploymentTypesContextValue | null>(null);

const EmploymentTypesContextProvider = ({
  children,
}: EmploymentTypesContextProps) => {
  const [employmentTypes, setEmploymentTypes] = useState<employmentType[]>([]);

  useEffect(() => {
    getAllEmploymentTypes()
      .then((data) => setEmploymentTypes(data))
      .catch(console.warn);
  }, []);

  return (
    <EmploymentTypesContext.Provider
      value={{ employmentTypes, setEmploymentTypes }}
    >
      {children}
    </EmploymentTypesContext.Provider>
  );
};

export default EmploymentTypesContextProvider;
