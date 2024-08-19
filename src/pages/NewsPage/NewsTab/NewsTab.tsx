import { Tabs, TabsProps } from "antd";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { setRoute } from "../../../store/Slices/UISlice";

const items: TabsProps["items"] = [
  { key: "everything", label: "Everything" },
  { key: "top-headlines", label: "Top Headlines" },
  { key: "top-headlines/sources", label: "Sources" },
];

const NewsTab: FC<TabsProps> = ({ ...props }) => {
  const dispatch = useDispatch<AppDispatch>();
  const route = useSelector((state: RootState) => state.ui.route);

  const onChange = (key: string) => {
    dispatch(setRoute(key));
  };

  return (
    <Tabs
      activeKey={route}
      tabPosition={"top"}
      items={items}
      onChange={onChange}
      {...props}
    />
  );
};

export default NewsTab;
