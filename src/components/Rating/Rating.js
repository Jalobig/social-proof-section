import React from "react";
import classes from "./Rating.module.scss";
import IconStar from "../../images/icon-star.svg";

const Rating = (props) => {
  return (
    <div className={`${classes.rating} ${props.className}`}>
      <div className={classes["rating__star-group"]}>
        {[...Array(props.numStars)].map((x, i) => (
          <img
            key={i}
            src={IconStar}
            alt="Icon of a star"
            className={classes.rating__star}
          />
        ))}
      </div>
      <p className={classes.rating__text}>{props.children}</p>
    </div>
  );
};

export default Rating;
