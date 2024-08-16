import { FC, CSSProperties } from "react";
import { Modal, ModalProps } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const OK_TEXT = "Submit";
const CANCEL_TEXT = "Cancel";

// interface AntdModalProps extends ModalProps {}

const LargeModal: FC<ModalProps> = (props) => {
  const {
    children,
    okText = OK_TEXT,
    okButtonProps = { type: "primary" },
    cancelText = CANCEL_TEXT,
    width,
    styles,
    centered = true,
    closable = true,
    destroyOnClose = false,
    ...rest
  } = props;

  const isMobile = useSelector((state: RootState) => state.ui.isMobile);

  const defaultBodyStyle: CSSProperties = {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  };
  const stylesObj = styles
    ? { body: defaultBodyStyle, ...styles }
    : { body: defaultBodyStyle };

  return (
    <Modal
      width={isMobile ? "50vw" : width || "60vw"}
      centered={centered}
      closable={closable}
      okText={okText}
      cancelText={cancelText}
      okButtonProps={okButtonProps}
      destroyOnClose={destroyOnClose}
      styles={stylesObj}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default LargeModal;
