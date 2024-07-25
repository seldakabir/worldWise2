import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
export default function CityItem({ city }) {
  const { emoji, cityName, date, id } = city;
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));
  return (
    <li>
      <Link to={`${id}`} className={styles.cityItem}>
        <span className={styles.imoji}>{emoji} </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
