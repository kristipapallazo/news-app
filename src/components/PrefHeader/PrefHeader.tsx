import { FC } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { RootState } from "../../store";
import SourceSelect from "./SourceSelect";
// import DatePickerComp from "./DatePicker";
import InputKeyword from "./InputKeyword";
import PrefModuleBtn from "./PrefModuleBtn";
import PageSelect from "./PageSelect";
import classes from "./PrefHeader.module.css";

const PrefHeader: FC = () => {
  const { sources, page /* from */ } = useSelector(
    (state: RootState) => state.filters.everything
  );

  return (
    <div className={classes.header}>
      <Row gutter={[16, 16]} style={{ flex: 1 }}>
        <Col xs={24} sm={12} md={6}>
          <InputKeyword />
        </Col>

        <Col xs={24} sm={12} md={6}>
          <SourceSelect sources={sources} stateful={true} />
        </Col>

        <Col xs={24} sm={12} md={6}>
          {/* <DatePickerComp stateful={true} date={from} /> */}
        </Col>

        <Col xs={24} sm={12} md={6}>
          <PageSelect page={page} stateful={true} />
        </Col>
      </Row>
      <PrefModuleBtn />
    </div>
  );
};

export default PrefHeader;
