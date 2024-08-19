import { FC } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { RootState } from "../../store";
import SourceSelect from "./SourceSelect";
import DatePickerComp from "./DatePicker";
import InputKeyword from "./InputKeyword";
import classes from "./PrefHeader.module.css";
import PrefModuleBtn from "./PrefModuleBtn";

const PrefHeader: FC = () => {
  const { source } = useSelector(
    (state: RootState) => state.filters.everything
  );

  return (
    <div className={classes.header}>
      <Row gutter={[16, 16]} style={{ flex: 1 }}>
        <Col xs={24} sm={12} md={6}>
          <SourceSelect source={source} />
        </Col>

        <Col xs={24} sm={12} md={6}></Col>

        <Col xs={24} sm={12} md={6}>
          <DatePickerComp />
        </Col>

        <Col xs={24} sm={12} md={6}>
          <InputKeyword />
        </Col>
      </Row>
      <PrefModuleBtn />
    </div>
  );
};

export default PrefHeader;
