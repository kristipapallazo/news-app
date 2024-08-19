import { FC } from "react";
import { Select, SelectProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setEverything } from "../../store/Slices/FiltersSlice";

interface SourceSelect extends SelectProps {
  sources?: Source;
  stateful?: boolean;
}
const SourceSelect: FC<SourceSelect> = ({
  stateful,
  sources,
  // mode = "multiple",
  ...props
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const sourcesAllIds = useSelector(
    (state: RootState) => state.newsApi.sources.sourcesAllIds
  );
  const everything = useSelector(
    (state: RootState) => state.filters.everything
  );

  const options = sourcesAllIds.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  const handleSourceChange = (value: string) => {
    dispatch(setEverything({ ...everything, sources: value }));
  };
  return (
    <Select
      options={options}
      placeholder="Select Source"
      value={stateful ? sources : undefined}
      onChange={stateful ? handleSourceChange : undefined}
      style={{ width: "100%" }}
      // mode={mode}
      {...props}
    />
  );
};

export default SourceSelect;
