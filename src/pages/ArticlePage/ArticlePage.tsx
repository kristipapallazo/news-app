import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "./ArticlePage.module.css";

const ArticlePage: FC = () => {
  const articles = useSelector((state: RootState) => state.articles.articles);
  const selectedArticle = useSelector(
    (state: RootState) => state.ui.selectedArticle
  );

  const article = articles.find(({ id }) => id === selectedArticle);
  console.log("article", article);

  const { title, description, source, urlToImage } = article!;

  return (
    <div className={classes.article}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{source}</p>
      <img src={urlToImage} alt="test" width={100} height={100} />
    </div>
  );
};

export default ArticlePage;
