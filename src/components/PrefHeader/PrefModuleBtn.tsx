import { Button } from "antd";
import { FC } from "react";
import { GrConfigure } from "react-icons/gr";
import useNewsPageCtx from "../../hooks/useNewsPageCtx";

const PrefModuleBtn: FC = () => {
  const { toggleModal } = useNewsPageCtx();

  return (
    <Button
      type="primary"
      shape="circle"
      icon={<GrConfigure />}
      style={{ flexShrink: 0 }}
      onClick={toggleModal}
    />
  );
};

export default PrefModuleBtn;
