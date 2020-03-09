import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import CatsListView from './CatsListView';

import actions from '../../redux/actions';

const { addCats } = actions.catsActions;

/**
 * Component - Container
 * List of cats
 * Includes cards for all cats
 */
const CatsList = ({
  catsData,
  getCatsData,
}) => {
  useEffect(() => {
    getCatsData();
  }, []);

  const sortedCatsData = useMemo(() => {
    if (catsData && catsData.length) {

      return catsData.sort((firstCat, secondCat) => {
        if (firstCat.deleted && !secondCat.deleted) {

          return 1;
        } else if (!firstCat.deleted && secondCat.deleted) {

          return -1;
        } else {

          return firstCat.name.localeCompare(secondCat.name);
        }
      });
    }

    return null;
  }, [catsData]);

  return(
    <CatsListView catsData = { sortedCatsData } />
  );
}

function mapStateToProps (state) {
  const { catsData } = state.catsReducer;

  return {
    catsData,
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getCatsData: () => {
      dispatch(addCats());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CatsList);