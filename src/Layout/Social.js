import React from "react";
import classes from "./Social.module.scss";
import Rating from "../components/Rating/Rating";
import ImgAnne from "../images/image-anne.jpg";
import ImgColton from "../images/image-colton.jpg";
import ImgIrene from "../images/image-irene.jpg";
import Testimonials from "../components/Testimonials/Testimonials";

const Social = () => {
  return (
    <section className={classes.social}>
      <div className={classes.social__row}>
        <div className={classes.social__column}>
          <h1 className={classes["social__heading--1"]}>
            10,000+ of our users love our products.
          </h1>

          <p className={classes.social__text}>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className={`${classes.social__column} ${classes.social__rating}`}>
          <Rating numStars={5} className={`${classes["social__rating--1"]} `}>
            Rated 5 Stars in Reviews
          </Rating>
          <Rating numStars={5} className={`${classes["social__rating--2"]} `}>
            Rated 5 Stars in Report Guru
          </Rating>
          <Rating numStars={5} className={classes["social__rating--3"]}>
            Rated 5 Stars in BestTech
          </Rating>
        </div>
      </div>
      <div className={classes.social__row}>
        <Testimonials
          src={ImgColton}
          name="Colton Smith"
          status="Verified Buyer"
          className={classes['social__testimonials--1']}
        >
          " We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent! 
          "
        </Testimonials>

        <Testimonials
          src={ImgIrene}
          name="Irene Roberts"
          status="Verified Buyer"
          className={classes['social__testimonials--2']}
        >
          " Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery. "
        </Testimonials>

        <Testimonials src={ImgAnne} name="Anne Wallace" status="Verified Buyer"
        className={classes['social__testimonials--3']}>
          " Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone! "
        </Testimonials>
      </div>
    </section>
  );
};

export default Social;
