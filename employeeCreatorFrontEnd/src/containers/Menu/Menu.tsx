import MenuButton from "../../components/MenuButton/MenuButton";
import styles from "./Menu.module.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineFilterAlt } from "react-icons/md";
import { FaPersonCircleXmark } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import {
  EmployeeGenerator,
  testEmployees,
} from "../../services/employeeGenerator";
import { getAllEmployees } from "../../services/employee-service";
import { useContext } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";

const Menu = () => {
  const employeesContext = useContext(EmployeesContext);

  if (!employeesContext) {
    return <div>Error: Context not available</div>;
  }

  const { setEmployees } = employeesContext;

  const handleClick = async () => {
    await EmployeeGenerator(testEmployees);
    getAllEmployees().then((data) => setEmployees(data));
  };

  return (
    <div className={styles.menuContainer}>
      <MenuButton icon={<FaMagnifyingGlass />} modeType={"search"} />
      <MenuButton icon={<MdOutlineFilterAlt />} modeType={"filter"} />
      <MenuButton icon={<FaPersonCirclePlus />} modeType={"add"} />
      <MenuButton icon={<FaPencilAlt />} modeType={"edit"} />
      <MenuButton icon={<FaPersonCircleXmark />} modeType={"delete"} />
      <button onClick={handleClick} className={styles.testButton}>
        GENERATE TEST EMPLOYEES
      </button>
    </div>
  );
};

export default Menu;
