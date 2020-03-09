import React from 'react';
import { connect } from 'react-redux';

import CatPreviewView from './CatPreviewView';

/**
 * Component - Container
 * Profile of the chosen cat
 * Includes verbose info about the cat
 */
const CatPreview = ({ chosenCat }) => {
  return(
    <CatPreviewView
    currentCatData = { chosenCat } />
  );
}

function mapStateToProps(state) {
  const { chosenCat } = state.catsReducer;

  return { chosenCat };
};

export default connect(mapStateToProps)(CatPreview);