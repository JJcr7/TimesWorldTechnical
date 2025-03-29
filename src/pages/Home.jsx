import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/slices/countrySlice";
import CountryList from "../components/CountryList";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const { countries = [], loading, error } = useSelector((state) => state.countries);
  const [region, setRegion] = useState("All");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries = countries.filter((country) => {
    if (region === "All") return true;
    return country.region === region;
  });

  return (
    <>
      <Navbar setRegion={setRegion} />
      <div className="home-container">
        <h1>Welcome</h1>
        <Slider />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <CountryList countries={filteredCountries} />
        )}
      </div>
    </>
  );
};

export default Home;
