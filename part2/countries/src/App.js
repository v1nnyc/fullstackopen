import { useState, useEffect } from "react";
import CountryList from "./components/countryList";

import countryService from "./services/countries";

const App = () => {
  const [country, setCountry] = useState("");
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    if (country) {
      countryService
        .get(country)
        .then((countries) => {
          setCountryList(countries);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [country]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      find countries<input onChange={handleCountryChange}></input>
      <CountryList countryList={countryList}></CountryList>
    </div>
  );
};

export default App;
