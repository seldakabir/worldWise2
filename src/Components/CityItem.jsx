import PropTypes from "prop-types";
import styles from './CityItem.module.css'
export default function CityItem({ city}) {
  return (
      <li className={styles.cityItem}>
{           city.country
}


    </li>
  )
}

CityItem.propTypes = {
  city: PropTypes.shape({
    country: PropTypes.string.isRequired,
    // Define other properties of city object as needed
  }).isRequired,
};