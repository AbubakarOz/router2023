import React, { useState } from "react";
import Card from "./Card";
import Shop from "./Shop";
import styles from './Card.module.css'

const CardContent = () => {
  const [text, setText] = useState(Shop);

  return (
    <div className={styles.cardMain}>
      {text.map((product, index) => {
        return (
          <Card
            key={index}
            img={product.img}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default CardContent;
