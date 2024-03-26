import { useEffect, useState } from "react";
import styles from "./Filter.module.scss";

interface Props {
  toggleFilters: Function;
  filterItem: string;
  filterList: string[];
  activeFilters: string[];
  setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(props.activeFilters.includes(props.filterItem));
  }, [props.activeFilters, props.filterItem]);

  const handleCheckboxChange = () => {
    props.toggleFilters(props.filterItem);
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
