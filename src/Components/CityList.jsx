import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";

export default function CityList({ cities, isLoading }) {
  if (!cities.length) return <Message message="Add your first city" />;
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
