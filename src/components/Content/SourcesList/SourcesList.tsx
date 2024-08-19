import { FC } from "react";
import { useSelector } from "react-redux";
import MessageLabel from "../../UI/MessageLabel/MessageLabel";
import SourceItem from "./SourceItem";
import classes from "../ArticlesList/ArticlesList.module.css";
import { RootState } from "../../../store";

const SourcesList: FC = () => {
  const sources = useSelector(
    (state: RootState) => state.newsApi.sources.sources
  );

  const items = sources.map((source) => (
    <SourceItem key={source.id} source={source} />
  ));

  return (
    <>
      {items.length > 0 ? (
        <div className={classes.grid}>{items}</div>
      ) : (
        <MessageLabel />
      )}
    </>
  );
};

export default SourcesList;
