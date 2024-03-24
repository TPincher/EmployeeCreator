import { createContext, useEffect, useState, ReactNode } from "react";
import {
  employmentType,
  getAllEmploymentTypes,
} from "../services/type-service";

interface StatusContextProps {
  children: ReactNode;
}

interface StatusContextValue {
  employmentTypes: employmentType[];
  setEmploymentTypes: (updatedEmploymentTypes: employmentType[]) => void;
}

export const StatusContext = createContext<StatusContextValue | null>(null);

const StatusContextProvider = ({ children }: StatusContextProps) => {
  const [employmentTypes, setEmploymentTypes] = useState<employmentType[]>([]);

  useEffect(() => {
    getAllEmploymentTypes()
      .then((data) => setEmploymentTypes(data))
      .catch(console.warn);
  }, []);

  return (
    <StatusContext.Provider value={{ employmentTypes, setEmploymentTypes }}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusContextProvider;
