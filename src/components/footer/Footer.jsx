import React from "react";
import { Link } from "react-router-dom";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.footerParagraph}>
          Cover template for
          <Link className={styles.footerLink} to="https://getbootstrap.com/">
            Bootstrap
          </Link>
          , by
          <Link className={styles.footerLink} to="https://twitter.com/mdo">
            @mdo
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
