import { useContext, useEffect, useState } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  getAllEmployees,
} from "../../services/employee-service";
import DetailsForm from "../DetailsForm/DetailsForm";
import List from "../List/List";
import Menu from "../Menu/Menu";
import styles from "./Page.module.scss";
import { ActiveEmployeeContext } from "../../context/ActiveEmployeeContext";
import { ModeContext } from "../../context/ModeContext";
import { ConsoleMessageContext } from "../../context/ConsoleMessageContext";

const Page = () => {
  const employeesContext = useContext(EmployeesContext);
  const activeEmployeeContext = useContext(ActiveEmployeeContext);
  const modeContext = useContext(ModeContext);
  const consoleMessageContext = useContext(ConsoleMessageContext);

  if (
    !consoleMessageContext ||
    !employeesContext ||
    !activeEmployeeContext ||
    !modeContext
  ) {
    return <div>Error: Context not available</div>;
  }

  const { setEmployees } = employeesContext;
  const { activeEmployee } = activeEmployeeContext;
  const { mode } = modeContext;
  const { consoleMessage, setConsoleMessage } = consoleMessageContext;
  const [activeFilters, setActiveFilters] = useState([]);

  const updateConsole = (update: string) => {
    const currentConsoleMessage = consoleMessage;
    const updatedConsoleMessage = [...currentConsoleMessage, update];
    setConsoleMessage(updatedConsoleMessage);
  };

  useEffect(() => {
    getAllEmployees().then((data) => setEmployees(data));
  }, [setEmployees, activeFilters, consoleMessage]);

  const submit = async (data: any) => {
    const id: number = activeEmployee.id !== undefined ? activeEmployee.id : 0;

    try {
      if (mode === "add") {
        await addEmployee(data);
        updateConsole(`employee ${data.firstName} ${data.lastName} added`);
      } else if (mode === "edit") {
        if (typeof id !== "undefined") {
          await editEmployee(id, data);
          updateConsole(`employee ${data.firstName} ${data.lastName} edited`);
        } else {
          updateConsole(`could not edit employee ${id}`);
          throw new Error("ID is undefined");
        }
      } else if (mode === "delete") {
        if (typeof id !== "undefined") {
          await deleteEmployee(id);
          updateConsole(`employee ${id} deleted`);
        } else {
          updateConsole(`could not delete employee ${id}`);
          throw new Error("ID is undefined");
        }
      }
      getAllEmployees().then((data) => setEmployees(data));
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className={styles.mainDisplay}>
      <Menu />
      <List activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
      <DetailsForm submit={submit} />
    </div>
  );
};

export default Page;
