import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from '../components/Country';
import CountryLoader from '../components/CountryLoader';

import SortBy from '../components/SortBy';
import { fetchCountry } from '../redux/actions/countries';
import { setSortBy } from '../redux/actions/filters';

const sortItems = [
  { name: 'Show all', type: 'all' },
  { name: 'Africa', type: 'africa' },
  { name: 'America', type: 'americas' },
  { name: 'Asia', type: 'asia' },
  { name: 'Europe', type: 'europe' },
  { name: 'Oceania', type: 'oceania' },
];

function MainPage() {
  const dispatch = useDispatch();
  const items = useSelector(({ countries }) => countries.items);
  const isLoaded = useSelector(({ countries }) => countries.isLoaded);

  const sortBy = useSelector(({ filters }) => filters.sortBy);

  React.useEffect(() => {
    dispatch(fetchCountry(sortBy));
  }, [sortBy]);

  const onSelectRegion = (sort) => {
    dispatch(setSortBy(sort));
  };

  return (
    <main className="main">
      <div className="main__inputs ">
        <input placeholder="Search for a country..." type="text" />
        <SortBy sortItems={sortItems} sortBy={sortBy} onSelectRegion={onSelectRegion} />
      </div>
      <div className="main__countries countries">
        {isLoaded
          ? items.map((item, id) => <Country key={`${item.name}__${id}`} item={item} />)
          : Array(10)
              .fill(0)
              .map((_, id) => <CountryLoader key={id} />)}
      </div>
    </main>
  );
}

export default MainPage;
