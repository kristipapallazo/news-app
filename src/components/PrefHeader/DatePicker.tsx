import { FC } from "react";
import dayjs from "dayjs";
import { DatePicker, DatePickerProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setEverything } from "../../store/Slices/FiltersSlice";

interface DatePickerCompProps extends DatePickerProps {
  date?: Date;
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
    if (type === "from") {
      dispatch(setEverything({ ...everything, from: dateString }));
    } else {
      dispatch(setEverything({ ...everything, to: dateString }));
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
