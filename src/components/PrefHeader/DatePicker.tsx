import dayjs from "dayjs";
import { FC } from "react";
// import { setDate, setToDate } from "../../store/FiltersSlice";
import { DatePicker, DatePickerProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Date } from "../../types/redux";

interface DatePickerCompProps extends DatePickerProps {
  date?: Date;
  type?: "from" | "to";
}
const DatePickerComp: FC<DatePickerCompProps> = ({
  date,
  type = "from",
  ...props
}) => {
  const dispatch = useDispatch<AppDispatch>();

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
      onChange={date ? handleDateChange : undefined}
      value={dateValue}
      style={{ width: "100%" }}
      {...props}
    />
  );
};

export default DatePickerComp;
