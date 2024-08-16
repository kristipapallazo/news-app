import { FC } from "react";
// import { useSelector } from "react-redux";
import { Row, Col } from "antd";
// import { RootState } from "../../store";
import SourceSelect from "./SourceSelect";
import CategsSelect from "./CategsSelect";
import DatePickerComp from "./DatePicker";
import InputKeyword from "./InputKeyword";
import classes from "./PrefHeader.module.css";
import PrefModuleBtn from "./PrefModuleBtn";

const PrefHeader: FC = () => {
  // const { categ, source, keyword, date } = useSelector(
  //   (state: RootState) => state.filters
  // );

  return (
    <div className={classes.header}>
      <Row gutter={[16, 16]} style={{ flex: 1 }}>
        <Col xs={24} sm={12} md={6}>
          <SourceSelect />
        </Col>

        <Col xs={24} sm={12} md={6}>
          <CategsSelect />
        </Col>

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
