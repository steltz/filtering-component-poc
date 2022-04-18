var pretty = require("js-object-pretty-print").pretty;
import useStore from "../store/base";

const FilterConfigViewer = () => {
  const filterConfig = useStore((state) => state.filterConfig);
  return (
    <div style={{ height: "100vh", padding: "30px" }}>
      <h1>FilterConfigViewer</h1>
      <pre>{pretty(filterConfig)}</pre>
    </div>
  );
};
export default FilterConfigViewer;
