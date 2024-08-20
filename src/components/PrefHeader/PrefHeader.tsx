import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { AppDispatch, RootState } from "../../store";
import SourceSelect from "./SourceSelect";
// import DatePickerComp from "./DatePicker";
import InputKeyword from "./InputKeyword";
import PrefModuleBtn from "./PrefModuleBtn";
import PageSelect from "./PageSelect";
import classes from "./PrefHeader.module.css";
import { setEverything } from "../../store/Slices/FiltersSlice";
import DatePickerComp from "./DatePicker";

const PrefHeader: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { sources, page, from } = useSelector(
    (state: RootState) => state.filters.everything
  );
  const everything = useSelector(
    (state: RootState) => state.filters.everything
  );
  const handleKeywordChange = (q: string) => {
    dispatch(setEverything({ ...everything, q }));
  };

  return (
    <div className={classes.header}>
      <Row gutter={[16, 16]} style={{ flex: 1 }}>
        <Col xs={24} sm={12} md={6}>
          <InputKeyword
            handleStateChange={handleKeywordChange}
            q={everything.q}
          />
        </Col>

        <Col xs={24} sm={12} md={6}>
          <SourceSelect sources={sources} stateful={true} />
        </Col>

        <Col xs={24} sm={12} md={6}>
          <DatePickerComp stateful={true} date={from} />
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
