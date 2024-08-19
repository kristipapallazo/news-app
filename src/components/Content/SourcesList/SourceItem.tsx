import { FC, memo } from "react";
import classes from "./SourceItem.module.css";
import CardItem from "../../UI/CardItem/CardItem";

interface SourceItemProps {
  source: NewsAPISource;
}
const SourceItem: FC<SourceItemProps> = memo(({ source }) => {
  const { name, description, url, category, language, country } = source;

  return (
    <CardItem>
      <div className={classes.contentCont}>
        <h3 className={classes.title}>{name}</h3>
        <p className={classes.content}>{description}</p>
        <p className={classes.category}>Category: {category}</p>
        <p className={classes.language}>Language: {language}</p>
        <p className={classes.country}>Country: {country}</p>
        <div className={classes.bottomLine}>
          <a
            className={classes.link}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Source
          </a>
        </div>
      </div>
    </CardItem>
  );
});

export default SourceItem;
