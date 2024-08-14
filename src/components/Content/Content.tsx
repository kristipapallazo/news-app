import { FC } from "react";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";

interface ContentProps {
  module: string;
}
const Content: FC<ContentProps> = ({ module }) => {
  return (
    <div>
      {module === "home" ? (
        <Home />
      ) : module === "fav" ? (
        <Favorites />
      ) : (
        <div>Module not found</div>
      )}
    </div>
  );
};

export default Content;
