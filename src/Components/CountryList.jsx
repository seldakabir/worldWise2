import { PassContext } from "../Contexts/CitiesContext";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
export default function CountryList() {
  const { cities, isLoding } = PassContext();
  if (isLoding) return <Spinner />;
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  console.log(countries);
  return (
    <ul className={styles.countryList}>
      {countries.map((Country) => (
        <CountryItem country={Country} />
      ))}
    </ul>
  );
}
