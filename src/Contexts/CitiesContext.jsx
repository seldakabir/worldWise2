import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  // function findCurrent(id) {
  //   setCurrentCity(cities.find((city) => city.id === id));
  // }

  useEffect(function () {
    async function fetchCity() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
        //  console.log(data);
      } catch (err) {
        console.error("there is an error", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCity();
  }, []);
  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
      //  console.log(data);
    } catch (err) {
      console.error("there is an error", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}
function PassContext() {
  const context = useContext(CitiesContext);
  if (context === undefined) return new Error("there is an error");
  return context;
}
export { CitiesProvider, PassContext };
