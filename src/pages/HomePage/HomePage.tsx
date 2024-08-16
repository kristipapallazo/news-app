import { FC } from "react";
import classes from "./HomePage.module.css";
import { Button } from "antd";
import { Module } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { setModule } from "../../store/UISlice";
import { AppDispatch, RootState } from "../../store";
import { defineClass } from "../../utils";

interface BtnContProps {
  isMobile: boolean;
}
const BtnCont: FC<BtnContProps> = ({ isMobile }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleNavigation = (module: Module) => {
    dispatch(setModule(module));
  };

  const btnContClass = defineClass(
    classes["btn-cont"],
    classes.mobile,
    isMobile
  );

  return (
    <div className={btnContClass}>
      <Button className={classes.btn} onClick={() => handleNavigation("list")}>
        Explore News
      </Button>
      <Button className={classes.btn} onClick={() => handleNavigation("fav")}>
        Explore Favorites
      </Button>
    </div>
  );
};

const HomePage: FC = () => {
  const isMobile = useSelector((state: RootState) => state.ui.isMobile);

  const contentClass = defineClass(classes.content, classes.mobile, isMobile);

  return (
    <div className={classes.home}>
      <div className={contentClass}>
        <h1 className={classes.title}>Welcome to News Aggregator</h1>
        <p className={classes.desp}>
          Your one-stop destination for the latest news, in-depth articles, and
          breaking stories from around the globe.
        </p>
        <p className={classes.motto}>"Stay informed, stay empowered."</p>
        <BtnCont isMobile={isMobile} />
      </div>
    </div>
  );
};

export default HomePage;
