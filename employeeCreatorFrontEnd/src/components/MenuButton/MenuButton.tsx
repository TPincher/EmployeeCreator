import { IconContext } from "react-icons/lib";
import styles from "./MenuButton.module.scss";
import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext";

interface Props {
  icon: any;
  modeType: string;
}

const MenuButton = (props: Props) => {
  const modeContext = useContext(ModeContext);

  if (!modeContext) {
    return <div>Error: Context data not available</div>;
  }

  const { setMode } = modeContext;

  const handleClick = () => {
    setMode(props.modeType);
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "black", size: "30%" }}>
        <button onClick={handleClick} className={styles.menuButton}>
          {props.icon}
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default MenuButton;
