import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {cities} from '../../consts';

const CitiesNavigationList = ({onChangeLocation, currentLocationCity}) => {
  return (
    <ul className="locations__list tabs__list">
      {
        cities.map(({city}) => {
          const activeClass = city === currentLocationCity ? `tabs__item--active` : ``;

          return (
            <li
              key={city}
              className="locations__item"
              onClick={() => onChangeLocation(city)}>
              <Link
                to="/"
                className={`locations__item-link tabs__item ${activeClass}`}>
                <span>{city}</span>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

CitiesNavigationList.propTypes = {
  onChangeLocation: PropTypes.func.isRequired,
  currentLocationCity: PropTypes.string.isRequired
};

export default CitiesNavigationList;
