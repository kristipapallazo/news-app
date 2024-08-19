import { FC, MouseEventHandler, ReactNode } from "react";
import NotFoundImg from "../../../assets/not-found.jpg";
import classes from "./CardItem.module.css";

interface Img {
  urlToImage?: string;
  title?: string;
}
interface CardItemProps<T> {
  onClick?: MouseEventHandler<T>;
  children?: ReactNode;
  img?: Img;
}

const CardItem: FC<CardItemProps<HTMLDivElement>> = ({
  children,
  onClick,
  img,
}) => {
  return (
    <div className={classes.item} onClick={onClick}>
      {img && (
        <img
          className={classes.img}
          src={img.urlToImage || NotFoundImg}
          alt={img.title}
          loading="lazy"
        />
      )}
      {children}
    </div>
  );
};

export default CardItem;
