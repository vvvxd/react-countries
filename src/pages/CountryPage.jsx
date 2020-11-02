import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { activeCountry, fetchCountry } from '../redux/actions/country';

function CountryPage() {
  const dispatch = useDispatch();
  const activeItem = useSelector(({ country }) => country.activeItem);
  const item = useSelector(({ country }) => country.item);

  React.useEffect(() => {
    dispatch(fetchCountry(activeItem));
  }, [activeItem]);

  const onChangeCountry = (country) => {
    dispatch(activeCountry(country));
  };

  return (
    <main className="country">
      <div className="country__container">
        <div className="country__button">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>Back
          </Link>
        </div>
        <div className="country__content content">
          <div className="content__img">
            <img src={item.flag} alt="" />
          </div>
          <div className="content__text text">
            <div className="text__title">{item.name}</div>
            <div className="text__info">
              <span>
                <b> Native Name: </b> {item.nativeName}
              </span>
              <span>
                <b>Population: </b> {item.population}
              </span>
              <span>
                <b>Region: </b> {item.region}
              </span>
              <span>
                <b>Sub Region: </b> {item.subregion}
              </span>
              <span>
                <b>Capital: </b> {item.capital}
              </span>
              <span>
                <b>Top Level Domain: </b>
                {item.topLevelDomain && item.topLevelDomain.map((item) => `${item}  `)}
              </span>
              <span>
                <b>Currencies: </b>{' '}
                {item.currencies && item.currencies.map((item) => `${item.name}  `)}
              </span>
              <span>
                <b>Languages: </b>{' '}
                {item.languages && item.languages.map((item) => `${item.name}  `)}
              </span>
            </div>
            <div className="text__border-country">
              <h2>Border countries</h2>
              {item.borders &&
                item.borders.map((item, id) => (
                  <span key={id} onClick={() => onChangeCountry(item)}>
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryPage;
