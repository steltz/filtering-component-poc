import CheckboxFilter from "./CheckboxFilter";
import InputFilter from "./InputFilter";
import SelectFilter from "./SelectFilter";

const Filter = ({ config }) => {
  const renderFilter = (config) => {
    switch (config.type) {
      case "select":
        return <SelectFilter config={config} />;
      case "checkbox":
        return <CheckboxFilter config={config} />;
      case "input":
        return <InputFilter config={config} />;
      default:
        return null;
    }
  };
  return <>{renderFilter(config)}</>;
};
export default Filter;
