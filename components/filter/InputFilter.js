import { useMemo } from "react";
import styles from "./filter.module.css";
import { Input } from "antd";
import useStore from "../../store/base";
import { debounce } from "lodash";

const SelectFilter = ({ config }) => {
  const setActiveFilter = useStore((state) => state.setActiveFilter);
  const changeHandler = (e) => {
    const { value } = e.target;
    const { selector, type } = config;
    setActiveFilter({ selector, type, value });
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    []
  );
  return (
    <div className={styles.filterContainer}>
      <label className={styles.label}>{config?.name}</label>
      <Input onChange={debouncedChangeHandler} />
    </div>
  );
};
export default SelectFilter;
