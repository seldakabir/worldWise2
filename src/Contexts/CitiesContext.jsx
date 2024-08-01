import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
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
