import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";

export const Countries = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);

  useEffect(() => {
    if (playOnce) {
      axios
        .get(
          "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
        )
        .then((res) => setData(res.data));
      setPlayOnce(false);
    }

    const sortedCountry = () => {
      //Transform object en array
      const countryObj = Object.keys(data).map((i) => data[i]);
      // Tri décroissant de la population
      const sortedArray = countryObj.sort((a, b) => {
        return b.population - a.population;
      });
      sortedArray.length = 30;
      setSortedData(sortedArray);
    };
    sortedCountry();
  }, [data, playOnce]);

  return (
    <div className="countries">
      <ul className="countries-list">
        {sortedData.map((country) => (
          <Card country={country} key={country.name} />
        ))}
      </ul>
    </div>
  );
};
