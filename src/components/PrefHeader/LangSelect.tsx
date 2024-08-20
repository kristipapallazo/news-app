import { FC } from "react";
import { Select, SelectProps } from "antd";
import { S1_PARAMS } from "../../globals";

interface CategsSelectProps extends SelectProps {
  lang?: Language;
  // eslint-disable-next-line no-unused-vars
  handleStateChange?: (lang: string) => void;
}

const LangSelect: FC<CategsSelectProps> = ({
  lang,
  handleStateChange,
  ...props
}) => {
  const options = S1_PARAMS.language.map((i) => ({
    value: i,
    label: i,
  }));
  const handleLangChange = (value: string) => {
    console.log("value", value);
    if (handleStateChange) {
      handleStateChange(value);
    }
  };
  return (
    <Select
      allowClear
      options={options}
      placeholder="Select Language"
      value={lang}
      onChange={handleLangChange}
      style={{ width: "100%" }}
      {...props}
    />
  );
};

export default LangSelect;
