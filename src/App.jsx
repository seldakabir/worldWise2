import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Pricing from "./Pages/pricing.jsx";
import Product from "./Pages/product.jsx";
import NotFound from "./Pages/notFound.jsx";
import Homepage from "./Pages/HomePage.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import CityList from "./Components/CityList.jsx";
import CountryList from "./Components/CountryList.jsx";
import City from "./Components/City.jsx";
import Form from "./Components/Form.jsx";
import { CitiesProvider } from "./Contexts/CitiesContext.jsx";
// const Address="http://localhost:8000"
export default function App() {
  return (
    <div>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="app" element={<AppLayout />}>
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </div>
  );
}
