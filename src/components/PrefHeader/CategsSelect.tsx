import { FC } from "react";
import { Select, SelectProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { S1_PARAMS } from "../../globals";
import { upperCaseFrstLetter } from "../../utils";
import { setSources } from "../../store/Slices/FiltersSlice";

interface CategsSelectProps extends SelectProps {
  categ?: Categ;
}

const CategsSelect: FC<CategsSelectProps> = ({ categ, ...props }) => {
  const dispatch = useDispatch<AppDispatch>();
  const sources = useSelector((state: RootState) => state.filters.sources);

  const options = S1_PARAMS.category.map((categ) => ({
    value: categ,
    name: upperCaseFrstLetter(categ),
  }));

  const handleCategChange = (value: string) => {
    console.log("value", value);
    dispatch(setSources({ ...sources, category: value }));
  };
  return (
    <Select
      allowClear
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
