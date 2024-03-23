import DetailsForm from "../DetailsForm/DetailsForm";
import List from "../List/List";
import Menu from "../Menu/Menu";
import styles from "./Page.module.scss";

const Page = () => {
  return (
    <div className={styles.mainDisplay}>
      <Menu />
      <List />
      <DetailsForm />
    </div>
  );
};

export default Page;
