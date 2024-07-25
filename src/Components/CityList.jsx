
import styles from "./CityList.module.css"
import CityItem from "./CityItem"
import PropTypes from "prop-types";
import Spinner from "./Spinner.jsx"
export default function CityList({cities,isLoading}) {
 if(isLoading)  return <Spinner/>

  return (

    <ul className={styles.cityList}>
      {cities.map(city => {
        <CityItem city={city } key={city.id} />
})}


    </ul>
  )
}


CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired, // Example: Assuming id is a number and required
    // Define other properties of city object as needed
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
};