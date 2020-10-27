import React from 'react';

function CountryPage() {
  return (
    <main className="country">
      <div className="country__container">
        <div className="country__button">
          <a>
            <i className="fas fa-arrow-left"></i>Back
          </a>
        </div>
        <div className="country__content content">
          <div className="content__img">
            <img src="https://restcountries.eu/data/ala.svg" alt="" />
          </div>
          <div className="content__text text">
            <div className="text__title">Moscov</div>
            <div className="text__info">
              <span>
                <b> Native Name:</b> België
              </span>
              <span>
                <b>Population:</b> 11,319,511
              </span>
              <span>
                <b>Region:</b> Europe
              </span>
              <span>
                <b>Sub Region:</b>  Western Europe
              </span>
              <span>
                <b>Capital:</b> Brussels
              </span>
              <span>
                <b>Top Level Domain:</b> .be
              </span>
              <span>
                <b>Currencies:</b> Euro 
              </span>
              <span>
                <b>Languages:</b> Dutch, French, German
              </span>
            </div>
            <div className="text__border-country">
                <span>Border countries</span>
                <a href="">russia</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryPage;
