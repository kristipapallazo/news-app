import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { AppDispatch, RootState } from "../../store";
import classes from "./PrefHeader.module.css";
import CategsSelect from "./CategsSelect";
import LangSelect from "./LangSelect";
import { setSources } from "../../store/Slices/FiltersSlice";
import CountrySelect from "./CountrySelect";

const SourcesPrefHeader: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sources = useSelector((state: RootState) => state.filters.sources);

  const { category, country, language } = sources;

  const handleLangChange = (value: string) => {
    dispatch(setSources({ ...sources, language: value }));
  };
  const handleCountryChange = (value: string) => {
    dispatch(setSources({ ...sources, country: value }));
  };

  return (
    <div className={classes.header}>
      <Row gutter={[16, 16]} style={{ flex: 1 }}>
        <Col xs={24} sm={12} md={6}>
          <CountrySelect
            country={country}
            handleStateChange={handleCountryChange}
          />
        </Col>

        <Col xs={24} sm={12} md={6}>
          <CategsSelect categ={category} />
        </Col>

        <Col xs={24} sm={12} md={6}>
          <LangSelect lang={language} handleStateChange={handleLangChange} />
        </Col>
      </Row>
    </div>
  );
};

export default SourcesPrefHeader;
