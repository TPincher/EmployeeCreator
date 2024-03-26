import { useContext, useState } from "react";
import styles from "./List.module.scss";
import { EmployeesContext } from "../../context/EmployeesContext";
import { Employee } from "../../services/employee-service";
import ListEmployee from "../../components/ListEmployee/ListEmployee";
import ListHeader from "../../components/ListHeader/ListHeader";
import { ModeContext } from "../../context/ModeContext";

const List = () => {
  const employeesContext = useContext(EmployeesContext);
  const modeContext = useContext(ModeContext);

  if (!employeesContext || !modeContext) {
    return <div>Error: Context data not available</div>;
  }

  const [searchTerm, setSearchTerm] = useState("");
  const filters: string[] = ["casual", "part-time", "full-time"];
  const [activeFilters, setActiveFilters] = useState([""]);

  const { employees } = employeesContext;
  const { mode } = modeContext;

  return (
    <div className={styles.listContainer}>
      <ListHeader
        headerTitle={mode}
        setSearchTerm={setSearchTerm}
        filterList={filters}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      {employees &&
        employees.map((employee: Employee, id: number) => {
          return (
            (employee.firstName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
              employee.lastName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) &&
            activeFilters.includes(employee.employmentType.name) && (
              <ListEmployee
                key={id}
                id={id}
                employeeID={employee.id}
                firstName={employee.firstName}
                lastName={employee.lastName}
              />
            )
          );
        })}
    </div>
  );
};

export default List;
