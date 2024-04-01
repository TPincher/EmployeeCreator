import MenuButton from "../../components/MenuButton/MenuButton";
import styles from "./Menu.module.scss";
import { FaPersonCircleXmark } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import {
  EmployeeGenerator,
  testEmployees,
} from "../../services/employeeGenerator";
import { getAllEmployees } from "../../services/employee-service";
import { useContext, useRef } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";
import { ConsoleMessageContext } from "../../context/ConsoleMessageContext";

const Menu = () => {
  const employeesContext = useContext(EmployeesContext);
  const consoleMessageContext = useContext(ConsoleMessageContext);

  const consoleRef = useRef(null);

  if (!employeesContext || !consoleMessageContext) {
    return <div>Error: Context not available</div>;
  }

  const { setEmployees } = employeesContext;
  const { consoleMessage, setConsoleMessage } = consoleMessageContext;

  const scrollToBottom = () => {
    const scrollContainer = consoleRef.current;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  };

  const handleClick = async () => {
    await EmployeeGenerator(testEmployees);
    getAllEmployees().then((data) => setEmployees(data));
    const currentConsoleMessage = consoleMessage;
    const updatedConsoleMessage = [
      ...currentConsoleMessage,
      "reloading test employees",
    ];
    setConsoleMessage(updatedConsoleMessage);
  };

  return (
    <div className={styles.menuContainer}>
      <MenuButton icon={<FaPersonCirclePlus />} modeType={"add"} />
      <MenuButton icon={<FaPencilAlt />} modeType={"edit"} />
      <MenuButton icon={<FaPersonCircleXmark />} modeType={"delete"} />
      <div>
        <button onClick={handleClick} className={styles.testButton}>
          GENERATE TEST EMPLOYEES
        </button>
      </div>
      <div
        ref={consoleRef}
        className={styles.console}
        onChange={scrollToBottom}
      >
        {consoleMessage.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
};

export default Menu;
