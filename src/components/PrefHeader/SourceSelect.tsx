import { FC } from "react";
import { SourceTypeArr } from "../../types/types";
import { Select, SelectProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setSource } from "../../store/FiltersSlice";

// interface SourceSelectProps extends SelectProps {
//   dataSource: SourceType;
// }

const SourceSelect: FC<SelectProps> = ({ ...props }) => {
  const dispatch = useDispatch<AppDispatch>();
  const source = useSelector((state: RootState) => state.filters.source);

  const sourceTypeObj: SourceTypeArr = [
    { id: "news_api", name: "News Api" },
    { id: "nyc", name: "NYC" },
    { id: "guardian", name: "Guardian" },
  ];
  const options = sourceTypeObj.map(({ id, name }) => ({
    value: id,
    name: name,
  }));

  const handleSourceChange = (value: string) => {
    dispatch(setSource(value));
  };
  return (
    <Select
      options={options}
      placeholder="Select Source"
      value={source}
      onChange={handleSourceChange}
      // style={{ width: "100%" }}
      {...props}
    />
  );
};

export default SourceSelect;
