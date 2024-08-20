/* eslint-disable no-unused-vars */
import { Input, InputProps } from "antd";
import React, { FC, useEffect, useRef, useState } from "react";

interface InputKeywordProps extends InputProps {
  q?: string;
  handleStateChange: (value: string) => void;
}

const InputKeyword: FC<InputKeywordProps> = ({
  q,
  handleStateChange,
  ...props
}) => {
  const [input, setInput] = useState<string>();

  const timeoutRef = useRef<number | null>(null);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* implementing a mechanism to not update the state very freq. */
    const value = e.target.value;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      handleStateChange(value);
      // dispatch(setEverything({ ...everything, q }));
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
