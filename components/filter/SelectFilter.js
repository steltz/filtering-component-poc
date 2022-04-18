import styles from "./filter.module.css";
import { Select } from "antd";
import useStore from "../../store/base";
const { Option } = Select;

const SelectFilter = ({ config }) => {
  const setActiveFilter = useStore((state) => state.setActiveFilter);
  function handleChange(value) {
    const { selector, type } = config;
    setActiveFilter({ selector, type, value });
  }
  return (
    <div className={styles.filterContainer}>
      <label className={styles.label}>{config?.name}</label>
      <Select style={{ width: "100%" }} onChange={handleChange}>
        {config?.options.map((option) => (
          <Option key={option?.value} value={option?.value}>
            {option?.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};
export default SelectFilter;
