import React, { useState } from "react";
import { Link } from "react-router-dom";

const CountriesCard = ({ countriesData }) => {
  const [search, setSearch] = useState("");
  const searchText = (e) => {
    setSearch(e.target.value);
  };
  console.log(countriesData.name.common);
  let dataSearch = countriesData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });
  return (
    <>
      <div className="nav">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={searchText.bind(this)}
          />
        </div>
        <div className="select-box"></div>
      </div>
      <div className="container">
        {countriesData &&
          dataSearch.map((data, index) => {
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
