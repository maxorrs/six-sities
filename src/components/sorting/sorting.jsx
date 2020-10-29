import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {AppStateActionCreator} from '../../store/reducers/app-state/app-state';

import SortingList from '../sorting-list/sorting-list';

import {SortType} from '../../consts';
import {getSelectedSortTypeSelector, getSortMenuStatusSelector} from '../../store/selectors';

const Sorting = ({selectedSortType, isSortMenuOpen, onChangeSelectedSortType, handleToggledSortMenu}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => handleToggledSortMenu()}
        className="places__sorting-type"
        tabIndex="0">
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <SortingList
        isSortMenuOpen={isSortMenuOpen}
        onChangeSelectedSortType={onChangeSelectedSortType}/>
    </form>
  );
};

const mapStateToProps = (state) => ({
  selectedSortType: getSelectedSortTypeSelector(state),
  isSortMenuOpen: getSortMenuStatusSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSelectedSortType: (payload) => {
    dispatch(AppStateActionCreator.changeSelectedSortType(payload));
    dispatch(AppStateActionCreator.toggledSortMenu());
  },
  handleToggledSortMenu: () => dispatch(AppStateActionCreator.toggledSortMenu())
});

Sorting.propTypes = {
  selectedSortType: PropTypes.oneOf([...Object.values(SortType)]).isRequired,
  isSortMenuOpen: PropTypes.bool.isRequired,
  onChangeSelectedSortType: PropTypes.func.isRequired,
  handleToggledSortMenu: PropTypes.func.isRequired
};

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
