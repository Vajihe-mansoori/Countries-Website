import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountriesCard = ({ countriesData }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(countriesData);

    if (search || filter) {
      const handleFilter = () => {
        const data = countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          )
          .filter((country) => country.region === filter);
        setFilteredData(data);
      };
      handleFilter();
    }
  }, [countriesData, search, filter]);

  return (
    <>
      <div className="nav">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="select-box">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="container">
        {filteredData.map((data, index) => {
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
