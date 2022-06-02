import React, { useState } from "react";
import { Link } from "react-router-dom";

const CountriesCard = ({ countriesData }) => {
  const [search, setSearch] = useState("");
  const searchText = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="nav">
        <div className="search-box">
          <input type="text" placeholder="Search" value={search} />
        </div>
        <div className="select-box"></div>
      </div>
      <div className="container">
        {countriesData &&
          countriesData.map((data, index) => {
            const { flags, name, population, region, capital } = data;
            return (
              <Link
                key={index}
                to={`/CountrieDetail/${name.common}`}
                state={data}
              >
                <div className="card">
                  <img src={flags.png} alt={name.common} />
                  <h3>{name.common}</h3>
                  <p>
                    Population: <span>{population}</span>
                  </p>
                  <p>
                    Region: <span>{region}</span>
                  </p>
                  <p>
                    Capital: <span>{capital}</span>
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default CountriesCard;
