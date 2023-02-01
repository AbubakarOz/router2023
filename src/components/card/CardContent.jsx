import React, { useState } from "react";
import Card from "./Card";
import Shop from "./Shop";
import styles from "./Card.module.css";

const CardContent = ({value}) => {
  const [product, setProduct] = useState(Shop);

  const filtred = product.filter((item) => {
    if (item.name === value) {
      console.log(item.name)
      return item.name
    } else if (!value) {
    return item
    }
  });

  return (
    <div className={styles.cardMain}>
      {filtred.map((item, index) => {
        return (
          <Card
            key={index}
            img={item.img}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default CardContent;
