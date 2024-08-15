import { FC } from "react";
import classes from "./Footer.module.css";
import { Layout } from "antd";

const Footer: FC = () => {
  return (
    <Layout.Footer className={classes.footer}>
      <p>&copy; 2024 News Aggregator. All rights reserved.</p>
      <p>
        Contact us: <a href="mailto:support@newsapp.com">support@newsapp.com</a>
      </p>
    </Layout.Footer>
  );
};

export default Footer;
