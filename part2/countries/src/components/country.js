const Country = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h3>languages</h3>
      <ul>
        {Object.values(country.languages).map((language, key) => (
          <li key={key}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt}></img>
    </>
  );
};

export default Country;
