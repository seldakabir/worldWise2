import React from "react";
import styles from "./CountryItem.module.css";
export default function CountryItem({ country }) {
  return (
    <ul className={styles.countryItem}>
      <span>{country.country}</span>
      <span>{country.emoji}</span>
    </ul>
  );
}
