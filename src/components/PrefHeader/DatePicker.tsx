import { FC } from "react";
import dayjs from "dayjs";
import { DatePicker, DatePickerProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setEverything } from "../../store/Slices/FiltersSlice";

interface DatePickerCompProps extends DatePickerProps {
  date?: string | undefined;
  type?: "from" | "to";
  stateful?: boolean;
}
const DatePickerComp: FC<DatePickerCompProps> = ({
  date,
  type = "from",
  ...props
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const everything = useSelector(
    (state: RootState) => state.filters.everything
  );

  const handleDateChange: DatePickerProps["onChange"] = (_date, dateString) => {
    /* check later (based on type, modify from date or to date) */
    console.log("dateString", dateString);
    if (type === "from") {
      dispatch(setEverything({ ...everything, from: dateString as string }));
    } else {
      dispatch(setEverything({ ...everything, to: dateString as string }));
    }
  };

  const dateValue = date ? dayjs(date) : undefined;

  return (
    <DatePicker
      placeholder="Select Date"
      onChange={date ? handleDateChange : undefined}
      value={dateValue}
      style={{ width: "100%" }}
      {...props}
    />
  );
};

export default DatePickerComp;
