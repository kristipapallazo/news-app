import { MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { FC } from "react";
import { SetStateFn } from "../../types/types";
import { Menu } from "antd";
import { MenuItemType } from "antd/es/menu/interface";

interface MainHeaderProps extends MenuProps {
  module: string;
  setModule: SetStateFn<string>;
}

// type MenuItem = Required<MenuProps>["items"][number];

const MainHeader: FC<MainHeaderProps> = (props) => {
  const { module, setModule } = props;

  const onClick: MenuProps["onClick"] = (e) => {
    setModule(e.key);
  };

  const items: MenuItemType[] = [
    {
      key: "home",
      label: "Home",
    },
    {
      key: "fav",
      label: "Favorites",
    },
  ];

  return (
    <>
      <Header>
        <Menu
          onClick={onClick}
          selectedKeys={[module]}
          mode="horizontal"
          items={items}
          theme="light"
        />
      </Header>
    </>
  );
};

export default MainHeader;
