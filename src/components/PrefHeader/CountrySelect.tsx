import { FC } from "react";
import { Select, SelectProps } from "antd";
import { S1_PARAMS } from "../../globals";

interface CountrySelectProps extends SelectProps {
  country?: Country;
  // eslint-disable-next-line no-unused-vars
  handleStateChange: (country: string) => void;
}

const CountrySelect: FC<CountrySelectProps> = ({
  country,
  handleStateChange,
  ...props
}) => {
  const options = S1_PARAMS.coutry.map((i) => ({
    value: i,
    label: i,
  }));
  const handleCounChange = (value: string) => {
    console.log("value", value);
    handleStateChange(value);
  };
  return (
    <Select
      allowClear
      options={options}
      placeholder="Select Country"
      value={country}
      onChange={handleCounChange}
      style={{ width: "100%" }}
      {...props}
    />
  );
};

export default CountrySelect;
