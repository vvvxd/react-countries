import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SortBy from '../components/SortBy';
import { fetchCountry } from '../redux/actions/countries';

function MainPage() {
  const dispatch = useDispatch();
  const items = useSelector(({ countries }) => countries.items);

  console.log(items);
  React.useEffect(() => {
    dispatch(fetchCountry());
  }, []);

  return (
    <main className="main">
      <div className="main__inputs ">
        <input placeholder="Search for a country..." type="text" />
        <SortBy />
      </div>
      <div className="main__countries countries">
        {items.map((item,id) => (
          <div className="countries__item item" key={`${item.name}__${id}`}>
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
        ))}
      </div>
    </main>
  );
}

export default MainPage;
