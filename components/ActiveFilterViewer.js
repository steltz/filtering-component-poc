var pretty = require("js-object-pretty-print").pretty;
import useStore from "../store/base";

const ActiveFilterViewer = () => {
  const activeFilter = useStore((state) => state.activeFilter);
  return (
    <div style={{ height: "100vh", padding: "30px" }}>
      <h1>ActiveFilterViewer</h1>
      {activeFilter.length > 0 && <pre>{pretty(activeFilter)}</pre>}
      {activeFilter.length === 0 && <pre>No active filters</pre>}
    </div>
  );
};
export default ActiveFilterViewer;
