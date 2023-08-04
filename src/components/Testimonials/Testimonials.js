import React from "react";
import classes from "./Testimonials.module.scss";

const Testimonials = (props) => {
  return (
    <div className={`${classes.testimonial} ${props.className}`}>
        <div className={classes.testimonial__row}>
            <img src={props.src} alt={`Avatar of ${props.name}`} className={classes.testimonial__avatar}/>
            <div className={classes.testimonial__column}>
                <p className={classes.testimonial__name}>{props.name}</p>
                <p className={classes.testimonial__status}>{props.status}</p>
            </div>
        </div>
      <p className={classes.testimonial__text}>{props.children}</p>
    </div>
  );
};

export default Testimonials;
