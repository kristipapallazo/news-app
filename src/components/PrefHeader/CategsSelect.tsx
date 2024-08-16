import { FC } from "react";
import { CategTypeArr } from "../../types/types";
import { Select, SelectProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setCateg } from "../../store/FiltersSlice";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CategsSelectProps extends SelectProps {
  // categ: Categ;
}

const CategsSelect: FC<CategsSelectProps> = ({ ...props }) => {
  const dispatch = useDispatch<AppDispatch>();
  const categ = useSelector((state: RootState) => state.filters);

  const sourceTypeObj: CategTypeArr = [
    { id: "news_api", name: "News Api" },
    { id: "nyc", name: "NYC" },
    { id: "guardian", name: "Guardian" },
  ];
  const options = sourceTypeObj.map(({ id, name }) => ({
    value: id,
    name: name,
  }));

  const handleCategChange = (value: string) => {
    dispatch(setCateg(value));
  };
  return (
    <Select
      options={options}
      placeholder="Select Category"
      value={categ}
      onChange={handleCategChange}
      style={{ width: "100%" }}
      {...props}
    />
  );
};

export default CategsSelect;
