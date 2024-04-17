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
  };

  const listToFilter: string[] = props.filterList;

  // useEffect(() => {}, [listToFilter, props.activeFilters]);

  return (
    <div className={styles.headerContainer}>
      <h1>{props.headerTitle} employees</h1>
      Filter:
      <input
        type="text"
        className={styles.inputBox}
        onChange={handleChange}
      ></input>
      <div>
        {listToFilter &&
          listToFilter.map((filterItem, key: number) => {
            return (
              <Filter
                key={key}
                toggleFilters={toggleFilters}
                filterItem={filterItem}
                filterList={props.filterList}
                activeFilters={props.activeFilters}
                setActiveFilters={props.setActiveFilters}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ListHeader;
