import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Home from "../home/Home";
import Map from "../map/Map";
import styles from "./Header.module.css";
import CardContent from "../card/CardContent";

const Header = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/card");
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerMenu}>
        <div className={styles.inner}>Shoe store</div>
        <div>
          <form onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} />
          </form>
        </div>
        <div className={styles.nav}>
          <Link className={styles.menu} to="/">
            Home
          </Link>
          <Link className={styles.menu} to="/card">
            Shoes List
          </Link>
          <Link className={styles.menu} to="/map">
            Map
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardContent value={value}/>} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
};

export default Header;
