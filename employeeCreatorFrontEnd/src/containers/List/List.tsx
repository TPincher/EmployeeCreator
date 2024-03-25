import { useContext, useState } from "react";
import styles from "./List.module.scss";
import { EmployeesContext } from "../../context/EmployeesContext";
import { Employee } from "../../services/employee-service";
import ListEmployee from "../../components/ListEmployee/ListEmployee";

const List = () => {
  const { employees, setEmployees } = useContext(EmployeesContext);

  return (
    <div className={styles.listContainer}>
      List
      {employees &&
        employees.map((employee: Employee, id: number) => {
          return (
            <ListEmployee
              key={id}
              id={id}
              firstName={employee.firstName}
              lastName={employee.lastName}
            />
          );
        })}
    </div>
  );
};

export default List;
