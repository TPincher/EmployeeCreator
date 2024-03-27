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

const Page = () => {
  const employeesContext = useContext(EmployeesContext);
  const activeEmployeeContext = useContext(ActiveEmployeeContext);
  const modeContext = useContext(ModeContext);

  if (!employeesContext || !activeEmployeeContext || !modeContext) {
    return <div>Error: Context not available</div>;
  }

  const { setEmployees } = employeesContext;
  const { activeEmployee } = activeEmployeeContext;
  const { mode } = modeContext;
  const [activeFilters, setActiveFilters] = useState([]);

  useEffect(() => {
    getAllEmployees().then((data) => setEmployees(data));
  }, [setEmployees, activeFilters]);

  const submit = async (data: any) => {
    const id: number = activeEmployee.id;
    console.log(data);
    console.log(mode);
    try {
      if (mode === "add") {
        await addEmployee(data);
      } else if (mode === "edit") {
        if (typeof id !== "undefined") {
          await editEmployee(id, data);
        } else {
          throw new Error("ID is undefined");
        }
      } else if (mode === "delete") {
        if (typeof id !== "undefined") {
          await deleteEmployee(id);
        } else {
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
