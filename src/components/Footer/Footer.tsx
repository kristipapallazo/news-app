import { FC } from "react";
import classes from "./Footer.module.css";
import { Layout } from "antd";
import { defineClass } from "../../utils";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Footer: FC = () => {
  const isMobile = useSelector((state: RootState) => state.ui.isMobile);

  const footerClass = defineClass(classes.footer, classes.mobile, isMobile);

  return (
    <Layout.Footer className={footerClass}>
      <p>&copy; 2024 News Aggregator. All rights reserved.</p>
      <p>
        Contact us: <a href="mailto:support@newsapp.com">support@newsapp.com</a>
      </p>
    </Layout.Footer>
  );
};

export default Footer;
