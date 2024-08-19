import { FC } from "react";
import { Select, SelectProps } from "antd";
import { /* useDispatch, */ useSelector } from "react-redux";
import { /* AppDispatch, */ RootState } from "../../store";
import { S1_PARAMS } from "../../globals";
import { upperCaseFrstLetter } from "../../utils";

interface CategsSelectProps extends SelectProps {
  categ?: Categ;
}

const CategsSelect: FC<CategsSelectProps> = ({ ...props }) => {
  // const dispatch = useDispatch<AppDispatch>();
  const categ = useSelector((state: RootState) => state.filters);

  const options = S1_PARAMS.category.map((categ) => ({
    value: categ,
    name: upperCaseFrstLetter(categ),
  }));

  const handleCategChange = (value: string) => {
    console.log("value", value);
    // dispatch(setCateg(value));
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
