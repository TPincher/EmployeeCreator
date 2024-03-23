import MenuButton from "../../components/MenuButton/MenuButton";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <MenuButton />
      <MenuButton />
      <MenuButton />
    </div>
  );
};

export default Menu;
