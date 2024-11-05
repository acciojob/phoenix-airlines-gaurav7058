import React, { useState } from 'react';
import "../styles/FlightSearch.css";

export default function FlightSearch() {
  const cities = ["Mumbai", "Bengaluru", "Ahmedabad", "Pune"];
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [tripType, setTripType] = useState("oneWay");

  // Handle search input
  function handleSearchChange(e) {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredCities(value ? cities.filter(city => city.toLowerCase().includes(value)) : []);
  }

  // Set selected city to search input on click
  function selectCity(city) {
    setSearch(city);
    setFilteredCities([]);
  }

  return (
    <div className="flight-search-container">
      <form>
        {/* Trip type options */}
        <div className="radio-option flight-search-item">
          <input
            type="radio"
            name="tripType"
            value="oneWay"
            checked={tripType === "oneWay"}
            onChange={(e) => setTripType(e.target.value)}
          />
          <label>One Way</label>
          <input
            type="radio"
            name="tripType"
            value="roundTrip"
            checked={tripType === "roundTrip"}
            onChange={(e) => setTripType(e.target.value)}
          />
          <label>Round Trip</label>
        </div>

        {/* Source city search */}
        <div className="flight-search-item">
          <input
            type="text"
            placeholder="Search source city"
            value={search}
            onChange={handleSearchChange}
          />
          <div className="dropdown">
            {filteredCities.map((city, index) => (
              <div key={index} onClick={() => selectCity(city)} className="dropdown-item">
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* Destination city select */}
        <div className="flight-search-item">
          <select value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">Select Destination City</option>
            {cities.filter(city => city !== search).map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Date selection */}
        <div className="flight-search-item">
          <input type="date" />
        </div>

        {/* Search button */}
        <div className="flight-search-item">
          <button type="submit">SEARCH FLIGHT</button>
        </div>
      </form>
    </div>
  );
}
