import styles from "./filter.module.css";
import Filter from "./Filter";
import useStore from "../../store/base";

const BaseFilter = () => {
  const filterConfig = useStore((state) => state.filterConfig);
  const filters = filterConfig.map((config) => {
    return <Filter config={config} key={config.name} />;
  });
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>{filters}</div>
    </div>
  );
};
export default BaseFilter;
