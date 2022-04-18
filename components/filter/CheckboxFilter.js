import styles from "./filter.module.css";
import { Checkbox } from "antd";
import useStore from "../../store/base";

const CheckboxFilter = ({ config }) => {
  const setActiveFilter = useStore((state) => state.setActiveFilter);
  function onChange(values) {
    const { selector, type } = config;
    setActiveFilter({ selector, type, values });
  }
  return (
    <div className={styles.filterContainer}>
      <label className={styles.label}>{config?.name}</label>
      <Checkbox.Group
        className={styles.checkboxGroup}
        options={config?.options}
        onChange={onChange}
      />
    </div>
  );
};
export default CheckboxFilter;
