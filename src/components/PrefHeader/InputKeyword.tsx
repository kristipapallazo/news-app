import { Input, InputProps } from "antd";
import React, { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setEverything } from "../../store/Slices/FiltersSlice";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputKeywordProps extends InputProps {}

const InputKeyword: FC<InputKeywordProps> = ({ /* keyword, */ ...props }) => {
  const everything = useSelector(
    (state: RootState) => state.filters.everything
  );
  const { q } = everything;
  const [input, setInput] = useState<string>();

  const dispatch = useDispatch<AppDispatch>();
  const timeoutRef = useRef<number | null>(null);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* implementing a mechanism to not update the state very freq. */
    const value = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      dispatch(setEverything({ ...everything, q }));
    }, 300);
    setInput(value);
  };

  useEffect(() => {
    setInput(q!);
  }, [q]);

  return (
    <Input
      placeholder="Enter keyword"
      value={input}
      onChange={handleKeywordChange}
      style={{ width: "100%" }}
      {...props}
    />
  );
};

export default InputKeyword;
