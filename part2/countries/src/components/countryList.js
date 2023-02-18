import Country from "./country";

const CountryList = ({ countryList }) => {
  if (countryList.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countryList.length > 1) {
    return (
      <div>
        {countryList.map((country) => (
          <div id={country.area}>{country.name.common}</div>
        ))}
      </div>
    );
  } else if (countryList.length === 1) {
    return <Country country={countryList[0]}></Country>;
  }
};

export default CountryList;
