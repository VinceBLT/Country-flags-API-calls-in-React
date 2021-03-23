import React from "react";

export const Card = (props) => {
  const { country } = props;
  console.log(country);

  return (
    <li className="card">
        <img src={country.flag} alt="flag"/>
        <div className="data-container">
            <ul>
                <li>{country.name}</li>
                <li>{country.capital}</li>
                <li>Pop. {country.population}</li>
            </ul>
        </div>
    </li>
    );
};
