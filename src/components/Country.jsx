import React from 'react';

function Country({ item }) {
  return (
    <div className="countries__item item">
      <div className="item__img">
        <img src={item.flag} alt="" />
      </div>
      <div className="item__text">
        <p>{item.name}</p>
        <span>
          <b>Population : </b>
          {item.population}
        </span>
        <span>
          <b>Region : </b>
          {item.region}
        </span>
        <span>
          <b>Capital: </b>
          {item.capital}
        </span>
      </div>
    </div>
  );
}

export default Country;
