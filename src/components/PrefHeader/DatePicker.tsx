import dayjs from "dayjs";
import { FC } from "react";
import { setDate, setToDate } from "../../store/FiltersSlice";
import { DatePicker, DatePickerProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";

interface DatePickerCompProps extends DatePickerProps {
  type?: "from" | "to";
}
const DatePickerComp: FC<DatePickerCompProps> = ({
  type = "from",
  ...props
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const date = useSelector((state: RootState) => state.filters.date);

  const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log("date, dateString", date, dateString);
    /* check later (based on type, modify from date or to date) */
    if (type === "from") {
      dispatch(setDate(dateString));
    } else {
      dispatch(setToDate(dateString));
    }
  };

  const dateValue = date ? dayjs(date) : null;

  return (
    <DatePicker
      placeholder="Select Date"
      onChange={handleDateChange}
      value={dateValue}
      style={{ width: "100%" }}
      {...props}
    />
  );
};

export default DatePickerComp;
