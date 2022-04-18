import BaseFilter from "../components/filter/BaseFilter";
import FilterConfigViewer from "../components/FilterConfigViewer";
import ActiveFilterViewer from "../components/ActiveFilterViewer";
import { Row, Col } from "antd";
import useStore from "../store/base";

export default function Home() {
  const activeFilter = useStore((state) => state.activeFilter);
  return (
    <Row>
      <Col span={6}>
        <BaseFilter />
      </Col>
      <Col span={9}>
        <FilterConfigViewer />
      </Col>
      <Col span={9}>
        <ActiveFilterViewer />
      </Col>
    </Row>
  );
}
