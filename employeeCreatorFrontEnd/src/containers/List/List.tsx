import { useContext, useState } from "react";
import styles from "./List.module.scss";
import { EmployeesContext } from "../../context/EmployeesContext";
import { Employee } from "../../services/employee-service";
import ListEmployee from "../../components/ListEmployee/ListEmployee";
import ListHeader from "../../components/ListHeader/ListHeader";
import { ModeContext } from "../../context/ModeContext";
import { employmentType } from "../../services/type-service";

interface Props {
  activeFilters: string[];
  setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const List = (props: Props) => {
  const employeesContext = useContext(EmployeesContext);
  const modeContext = useContext(ModeContext);

  if (!employeesContext || !modeContext) {
    return <div>Error: Context data not available</div>;
  }

  const { employees } = employeesContext;
  const { mode } = modeContext;

  const filters: string[] = ["casual", "part-time", "full-time"];
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.listContainer}>
      <div>
        <ListHeader
          headerTitle={mode}
          setSearchTerm={setSearchTerm}
          filterList={filters}
          activeFilters={props.activeFilters}
          setActiveFilters={props.setActiveFilters}
        />
      </div>
      {employees &&
        employees.map((employee: Employee, id: number) => {
          const employmentTypeName = (employee.employmentType as employmentType)
            ?.name;
          return (
            (employee.firstName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
              employee.lastName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) &&
            props.activeFilters.includes(employmentTypeName) && (
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
