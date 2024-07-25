 import styles from './CityList.module.css';
 import CityItem from './CityItem';
 import Spinner from './Spinner.jsx';

export default function CityList({ cities,isLoading}) {

 

  if (isLoading) return <Spinner />;

return (
  <ul className={styles.cityList}>
    {
      cities
    }

    {/* {cities.map(city => (
      <CityItem key={city.id} city={city} />
    ))} */}
  </ul>
);
}



