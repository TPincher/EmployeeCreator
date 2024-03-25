import { useState, useEffect, useContext } from "react";
import styles from "./ListEmployee.module.scss";
import { ActiveEmployeeContext } from "../../context/ActiveEmployeeContext";
import { EmployeesContext } from "../../context/EmployeesContext";

interface CardProps {
  onClick?: Function;
  key: number;
  id: number;
  firstName: string;
  lastName: string;
}

const ListEmployee = (props: CardProps) => {
  const { setActiveEmployee } = useContext(ActiveEmployeeContext);
  const { employees } = useContext(EmployeesContext);

  const handleClick = (id: number) => {
    setActiveEmployee(employees[id]);
  };

  return (
    <article
      onClick={() => handleClick(props.id)}
      className={styles.employeeCard}
    >
      <p>
        {props.id}, {props.lastName}, {props.firstName}
      </p>
    </article>
  );
};

export default ListEmployee;
