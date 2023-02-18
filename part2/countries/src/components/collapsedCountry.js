import { useState } from "react";
import Country from "./country";

const CollapsedCountry = ({ country }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        {country.name.common}
        <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
        {show ? <Country country={country} /> : null}
      </div>
    </>
  );
};

export default CollapsedCountry;
