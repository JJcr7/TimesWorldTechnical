import React, { useState } from "react";
import { useSelector } from "react-redux";

const CountryList = () => {
  const { list = [], status } = useSelector((state) => state.countries);
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 countries

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to load countries.</p>;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6); // Load 6 more countries
  };

  return (
    <div className="container">
      <div className="row">
        {list.slice(0, visibleCount).map((country, index) => (
          <div key={index} className="col-md-6 col-sm-12 mb-3">
            <div className="card country-card">
              <img 
                src={country.flags?.png || country.flags?.svg} 
                className="card-img-top" 
                alt={country.name.common} 
              />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">{country.region}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < list.length && (
        <button onClick={loadMore} className="load-more-btn">Load More</button>
      )}
    </div>
  );
};

export default CountryList;
