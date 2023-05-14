import React from "react";

import styles from "./Loading.module.css";

export const Loading = () => (
  <div className={styles.pizza_container}>
    <div className={styles.pizza}>
      <div className={styles.basil}>
        <div className={styles.leaf} />
      </div>
      <div className={styles.onions} />
      <div className={styles.pepperonis} />
      <div className={styles.olives} />
      <div className={styles.slices}>
        <div className={`${styles.slice} ${styles.slice_1}`} />
        <div className={`${styles.slice} ${styles.slice_2}`} />
        <div className={`${styles.slice} ${styles.slice_3}`} />
        <div className={`${styles.slice} ${styles.slice_4}`} />
      </div>
    </div>
  </div>
);
