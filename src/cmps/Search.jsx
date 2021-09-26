import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from '../services/customHooks';
import { GameSearchResults } from './GameSearchResults';
export const Search = ({ onSetSearch, searchResults }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, handleChange] = useForm(
    {
      query: '',
    },
    onSetSearch
  );
  useEffect(() => {
    return setIsFocused(false);
  }, []);
  const toggleFocus = (state) => {
    setIsFocused(state);
  };
  console.log(searchResults);
  return (
    <div className="search-box-container">
      <input
        type="text"
        className="search-box"
        name="query"
        placeholder="Search Games"
        onChange={handleChange}
        onFocus={() => toggleFocus(true)}
        // onBlur={() => toggleFocus(false)}
        autoComplete="off"
      />
      {!isFocused ? null : (
        <div className="search-results">
          <GameSearchResults results={searchResults} />
        </div>
      )}
    </div>
  );
};
