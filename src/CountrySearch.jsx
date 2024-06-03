import React, { useState } from 'react';
import countryData from './resources/countryData.json'; 
import './CountrySearch.css';


const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = query
    ? countryData.filter(country =>
        country.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for a country..."
      />
      {showSuggestions && query && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySearch;
