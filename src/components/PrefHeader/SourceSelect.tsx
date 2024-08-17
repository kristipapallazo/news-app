import { FC } from "react";
import { SourceTypeArr } from "../../types/types";
import { Select, SelectProps } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { Source } from "../../types/redux";
import { setEverything } from "../../store/FiltersSlice";

interface SourceSelect extends SelectProps {
  source: Source;
}
const SourceSelect: FC<SourceSelect> = ({ source, ...props }) => {
  const dispatch = useDispatch<AppDispatch>();

  const sourceTypeObj: SourceTypeArr = [
    { value: "news_api", label: "News Api" },
    { value: "nyc", label: "NYC" },
    { value: "guardian", label: "Guardian" },
  ];
  const options = sourceTypeObj.map(({ value, label }) => ({
    value,
    label,
  }));

  const handleSourceChange = (value: string) => {
    dispatch(setEverything({ source: value }));
  };
  return (
    <Select
      options={options}
      placeholder="Select Source"
      value={source}
      onChange={handleSourceChange}
      style={{ width: "100%" }}
      {...props}
    />
  );
};

export default SourceSelect;
