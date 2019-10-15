import React from 'react';

const SearchBar = (props) => {

  const handleClick = (event) => {
    props.sortStocks(event.target.checked, event.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="checkbox" value="Alphabetically" checked={null} onClick={handleClick}/>
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Price" checked={null} onClick={handleClick}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.updateFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
