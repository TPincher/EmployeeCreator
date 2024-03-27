import { useContext, useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employee-service";
import { EmployeesContext } from "../../context/EmployeesContext";

interface Props {
  toggleFilters: Function;
  filterItem: string;
  filterList: string[];
  activeFilters: string[];
  setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter = (props: Props) => {
  const employeesContext = useContext(EmployeesContext);
  const [isChecked, setIsChecked] = useState(false);

  if (!employeesContext) {
    return <div>Error: Context data not available</div>;
  }

  const { setEmployees } = employeesContext;

  useEffect(() => {
    setIsChecked(props.activeFilters.includes(props.filterItem));
  }, [isChecked]);

  const handleCheckboxChange = () => {
    props.toggleFilters(props.filterItem);
    setIsChecked(!isChecked);
    getAllEmployees().then((data) => setEmployees(data));
  };

  return (
    <div>
      <label htmlFor={props.filterItem}>{props.filterItem}</label>
      <input
        type="checkbox"
        name={props.filterItem}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default Filter;
