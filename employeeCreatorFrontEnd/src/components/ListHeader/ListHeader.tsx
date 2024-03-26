import Filter from "../Filter/Filter";
import styles from "./ListHeader.module.scss";

interface Props {
  headerTitle: string;
  setSearchTerm: (term: string) => void;
  filterList: string[];
  activeFilters: string[];
  setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const ListHeader = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.setSearchTerm(e.target.value);
  };

  const toggleFilters = (filterInput: string) => {
    const index = props.activeFilters.indexOf(filterInput);

    if (index === -1) {
      props.activeFilters.push(filterInput);
    } else {
      props.activeFilters.splice(index, 1);
    }
    props.setActiveFilters(props.activeFilters);
    console.log(props.activeFilters);
  };

  const listToFilter: string[] = props.filterList;

  return (
    <div className={styles.headerContainer}>
      <h1>{props.headerTitle} employees</h1>
      {props.headerTitle !== "filter" && (
        <input
          type="text"
          className={styles.inputBox}
          onChange={handleChange}
        ></input>
      )}
      {props.headerTitle === "filter" && (
        <div>
          {listToFilter &&
            listToFilter.map((filterItem) => {
              return (
                <Filter
                  toggleFilters={toggleFilters}
                  filterItem={filterItem}
                  filterList={props.filterList}
                  activeFilters={props.activeFilters}
                  setActiveFilters={props.setActiveFilters}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ListHeader;
