import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Pricing from "./Pages/pricing.jsx";
import Product from "./Pages/product.jsx";
import NotFound from "./Pages/notFound.jsx";
import Homepage from "./Pages/HomePage.jsx";
import AppLayout from "./pages/AppLayout.jsx"
import CityList from "./Components/CityList.jsx"
import { useState, useEffect } from "react";
const Address="http://localhost:8000"
export default function App() {
  const [cities, setCities] = useState([])
  const [isLoading,setIsLoading]=useState(false)
  useEffect(function () {
  
    async function fetchCity() {
      try {
             setIsLoading(true)
      const res = await fetch(`${Address}/cities`)
         const data = await res.json()
        setCities(data)
       console.log(data);
    }
   catch(err) {
     console.error('there is an error',err);
      }
      finally {
          setIsLoading(false)
        
      }
  }

fetchCity();
},[])

  return (
    <div>
  
    <BrowserRouter>
    
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="pricing" element={<Pricing/>} />
        <Route path="product" element={<Product/>} />
          <Route path="app" element={<AppLayout />} >
            <Route path="cities" element={<CityList cities={cities} isLoading={ isLoading} />} />
            <Route path="countries" element={<p>countries</p>} />
            <Route path="form" element={<form>form</form>}/>
          

        </Route>
        <Route path="*" element={<NotFound/>} />
        <Route path="login" element={<Login/>} />
        
          





      </Routes>
      </BrowserRouter>
      </div>
  )
}
