import { FC } from "react";
import { Select, SelectProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setDSource, setRoute } from "../../store/Slices/UISlice";

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

  const handleDSourceChange = (dSource: DSourceType) => {
    /* set route to default */
    if (dSource === "news_api") dispatch(setRoute("everything"));
    dispatch(setDSource(dSource));
  };
  return (
    <Select
      options={options}
      placeholder="Select Source"
      value={dSource}
      onChange={handleDSourceChange}
      {...props}
    />
  );
};

export default DSourceSelect;
