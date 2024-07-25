import styles from "./CityItem.module.css";
export default function CityItem({ city }) {
  const { imoji, cityName, date } = city;
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));
  return (
    <li className={styles.cityItem}>
      <span className={styles.imoji}>{imoji} </span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}
