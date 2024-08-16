import { MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { FC } from "react";
import { Module } from "../../types/types";
import { Menu } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setModule } from "../../store/UISlice";
import SourceSelect from "../PrefHeader/SourceSelect";
import classes from "./MainHeader.module.css";

// type MenuItem = Required<MenuProps>["items"][number];

const MainHeader: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedArticle = useSelector(
    (state: RootState) => state.ui.selectedArticle
  );

  const { module } = useSelector((state: RootState) => state.ui);

  const onClick: MenuProps["onClick"] = (e) => {
    dispatch(setModule(e.key as Module));
  };

  const articleDisabled = selectedArticle.length > 0 ? false : true;
  const items: MenuItemType[] = [
    {
      key: "home",
      label: "Home",
    },
    {
      key: "list",
      label: "News",
    },
    {
      key: "article",
      label: "Article",
      disabled: articleDisabled,
    },
    {
      key: "fav",
      label: "Favorites",
    },
  ];

  return (
    <Header className={classes.header}>
      <Menu
        onClick={onClick}
        selectedKeys={[module]}
        mode="horizontal"
        items={items}
        theme="light"
      />
      <SourceSelect />
    </Header>
  );
};

export default MainHeader;
