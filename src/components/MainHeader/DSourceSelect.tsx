import { FC } from "react";
import { DSourceTypeArr } from "../../types/types";
import { Select, SelectProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setDSource } from "../../store/UISlice";

const DSourceSelect: FC<SelectProps> = ({ ...props }) => {
  const dispatch = useDispatch<AppDispatch>();
  const dSource = useSelector((state: RootState) => state.ui.dSource);

  const sourceTypeObj: DSourceTypeArr = [
    { value: "news_api", label: "News Api" },
    { value: "nyc", label: "NYC" },
    { value: "guardian", label: "Guardian" },
  ];
  const options = sourceTypeObj.map(({ value, label }) => ({
    value,
    label,
  }));

  const handleDSourceChange = (value: string) => {
    dispatch(setDSource(value));
  };
  return (
    <Select
      options={options}
      placeholder="Select Source"
      value={dSource}
      onChange={handleDSourceChange}
      // style={{ width: "100%" }}
      {...props}
    />
  );
};

export default DSourceSelect;
