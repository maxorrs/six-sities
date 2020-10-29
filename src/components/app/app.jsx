import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import {getOffersAdaptSelector} from '../../store/selectors';
import {fetchOffersNearbyList} from '../../store/api-actions';

const App = ({offers, getOffersNearby}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/login'>
          <SignInPage />
        </Route>
        <Route exact path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route exact
          path='/offer/:id'
          render={({match}) => {
            const {id: idMatch} = match.params;
            getOffersNearby(idMatch);
            const currentOffer = offers.find((offer) => offer.id === +idMatch);
            return <RoomPage currentOffer={currentOffer} />;
          }}>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  offers: getOffersAdaptSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  getOffersNearby: (id) => dispatch(fetchOffersNearbyList(id))
});

App.propTypes = {
  offers: PropTypes.array.isRequired,
  getOffersNearby: PropTypes.func.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
