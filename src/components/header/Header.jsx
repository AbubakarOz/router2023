import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "../home/Home";
import Map from "../map/Map";
import styles from "./Header.module.css";
import CardContent from "../card/CardContent";
import Shop from "../card/Shop";

const Header = () => {
  const [text, setText] = useState(Shop);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtred = text.filter(
      (item) => item.name.toLowerCase() === value.toLowerCase()
    );
    return filtred;
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerMenu}>
        <div className={styles.inner}>Shoe store</div>
        <div>
          <form onSubmit={handleSubmit}>
            <Link to="/card">
              <input value={value} onChange={handleChange} />
            </Link>
          </form>
        </div>
        <div className={styles.nav}>
          <Link className={styles.menu} to="/">
            Home
          </Link>
          <Link handleSubmit={handleSubmit} className={styles.menu} to="/card">
            Shoes List
          </Link>
          <Link className={styles.menu} to="/map">
            Map
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardContent />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
};

export default Header;
