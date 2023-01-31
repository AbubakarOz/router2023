import React from "react";
import styles from "./Card.module.css";

const Card = ({ img, name, price, description }) => {
  return (
    <div className={styles.card}>
        <div className={styles.card_img}>
          <img src={img} alt="Товар" />
        </div>
        <div className={styles.card_middle}>
          <div className={styles.card_namePrice}>
            <h5>{name}</h5>
            <h5>{price}</h5>
          </div>
          <button className={styles.button_details}>Детали</button>
        </div>
        <div className={styles.card_footer}>
          <div className={styles.card_description}>{description}</div>
          <button className={styles.button_basket}>Добавить в корзину</button>
        </div>
      </div>
  );
};
export default Card;
