import MenuButton from "../../components/MenuButton/MenuButton";
import styles from "./Menu.module.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineFilterAlt } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaPersonCircleXmark } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <MenuButton icon={<FaMagnifyingGlass />} modeType={"search"} />
      <MenuButton icon={<MdOutlineFilterAlt />} modeType={"filter"} />
      <MenuButton icon={<FaPerson />} />
      <MenuButton icon={<FaPersonCirclePlus />} modeType={"add"} />
      <MenuButton icon={<FaPencilAlt />} modeType={"edit"} />
      <MenuButton icon={<FaPersonCircleXmark />} modeType={"delete"} />
    </div>
  );
};

export default Menu;
