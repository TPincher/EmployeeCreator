import { IconContext } from "react-icons/lib";
import styles from "./MenuButton.module.scss";
import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext";

interface Props {
  icon: any;
  modeType: string;
}

const MenuButton = (props: Props) => {
  const { mode, setMode } = useContext(ModeContext);

  const handleClick = () => {
    setMode(props.modeType);
  };

  return (
    <div className={styles.menuButton}>
      <IconContext.Provider value={{ color: "black", size: "4em" }}>
        <button onClick={handleClick}>{props.icon}</button>
      </IconContext.Provider>
    </div>
  );
};

export default MenuButton;
