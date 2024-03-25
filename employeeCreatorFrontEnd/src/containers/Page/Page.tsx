import { useContext, useEffect } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";
import { addEmployee, getAllEmployees } from "../../services/employee-service";
import DetailsForm from "../DetailsForm/DetailsForm";
import List from "../List/List";
import Menu from "../Menu/Menu";
import styles from "./Page.module.scss";
import { ActiveEmployeeContext } from "../../context/ActiveEmployeeContext";

const Page = () => {
  const { setEmployees } = useContext(EmployeesContext);
  const { activeEmployee } = useContext(ActiveEmployeeContext);

  useEffect(() => {
    getAllEmployees().then((data) => setEmployees(data));
  }, [setEmployees]);

  const submit = async (data: any) => {
    console.log(data);
    try {
      await addEmployee(data);
      getAllEmployees().then((data) => setEmployees(data));
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className={styles.mainDisplay}>
      <Menu />
      <List />
      <DetailsForm submit={submit} />
    </div>
  );
};

export default Page;
