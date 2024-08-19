import { InputNumber, InputNumberProps } from "antd";
import { FC } from "react";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setEverything } from "../../store/Slices/FiltersSlice";

interface PageSelectProps extends InputNumberProps {
  page?: number;
  stateful?: boolean;
}

const PageSelect: FC<PageSelectProps> = ({ stateful, page, ...props }) => {
  const dispatch = useDispatch<AppDispatch>();
  const everything = useSelector(
    (state: RootState) => state.filters.everything
  );

  const handleChange: InputNumberProps["onChange"] = (value) => {
    dispatch(setEverything({ ...everything, page: value }));
  };

  return (
    <InputNumber
      min={1}
      placeholder="Page number"
      {...props}
      value={stateful ? page : null}
      onChange={stateful ? handleChange : undefined}
      style={stateful ? { width: "100%" } : undefined}
    />
  );
};

export default PageSelect;
