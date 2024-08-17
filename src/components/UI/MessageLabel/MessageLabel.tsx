import { FC } from "react";
import classes from "./MessageLabel.module.css";

interface MessageLabelProps {
  label?: string;
}
const MessageLabel: FC<MessageLabelProps> = ({ label = "No items found!" }) => {
  return <div className={classes.cont}>{label}</div>;
};

export default MessageLabel;
