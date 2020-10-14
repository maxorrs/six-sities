import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from '../pages/main-page';
import SignInPage from '../pages/sign-in-page';
import FavoritesPage from '../pages/favorites-page';
import RoomPage from '../pages/room-page';
import NotFoundPage from '../pages/not-found-page';

import {getFavoriteOffers} from '../../utils';
import {withLocation} from '../hocs';

const App = (props) => {
  const {offers, onChangeLocation, currentLocation} = props;
  const favoriteOffers = getFavoriteOffers(offers);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage
            offers={offers}
            onChangeLocation={onChangeLocation}
            currentLocation={currentLocation} />
        </Route>
        <Route exact path='/login'>
          <SignInPage />
        </Route>
        <Route exact path='/favorites'>
          <FavoritesPage favoriteOffers={favoriteOffers}/>
        </Route>
        <Route exact
          path='/offer/:id'
          render={({match}) => {
            const {id: idMatch} = match.params;
            const currentOffer = offers.find((offer) => offer.id === idMatch);

            return <RoomPage
              currentLocation={currentLocation}
              currentOffer={currentOffer}
              offers={offers} />;
          }}>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  onChangeLocation: PropTypes.func.isRequired,
  currentLocation: PropTypes.shape({
    city: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired
  })
};

export default withLocation(App);
