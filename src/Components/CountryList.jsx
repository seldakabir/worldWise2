import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
export default function CountryList({ cities }) {
  const countries = cities.reduce(
    (arr, city) => {
      if (arr.map((el) => el.city).includes(city.country)) return arr;
      else return [...arr, { country: city.country, emoji: city.imoji }];
    },

    []
  );
  console.log(countries);
  return (
    <ul className={styles.CountryList}>
      {countries.map((Country) => (
        <CountryItem country={Country} />
      ))}
    </ul>
  );
}
