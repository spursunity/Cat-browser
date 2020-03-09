import React from 'react';
import { connect } from 'react-redux';

import StoreCatButtonView from './StoreCatButtonView';

import actions from '../../redux/actions';
import styles from '../styles/StoreCatButton.module.css';
import { BUTTONS } from '../../constants';

const { deleteCat, restoreCat } = actions.catsActions;

/**
 * Component - Container
 * UI - Button
 * Delete/Restore the cat (its card) on client side
 */
const StoreCatButton = ({
  catData,
  catsData,
  onDeleteCat,
  onRestoreCat,
}) => {
  function defineButtonClass() {
    const {
      storeButton,
      deleteButton,
      restoreButton,
    } = styles;

    let additionalClass = deleteButton;

    if (catData.deleted) {
      additionalClass = restoreButton;
    }

    return `${storeButton} ${additionalClass}`;
  };

  function defineButtonText() {
    if (catData.deleted) {
      return BUTTONS.STORE_BUTTON.RESTORE;
    }

    return BUTTONS.STORE_BUTTON.DELETE;
  };

  function onButtonClick() {
    if (catData.deleted) {
      return onRestoreCat({ catId: catData.id, catsData });
    }

    return onDeleteCat({ catId: catData.id, catsData });
  };

  return (
    <StoreCatButtonView
    buttonClass = { defineButtonClass() }
    buttonText = { defineButtonText() }
    onButtonClick = { onButtonClick } />
  );
};


function mapStateToProps(state) {
  const { catsData } = state.catsReducer;

  return { catsData };
};

function mapDispatchToProps(dispatch) {
  return {
    onDeleteCat: (payload) => {
      dispatch(deleteCat(payload));
    },
    onRestoreCat: (payload) => {
      dispatch(restoreCat(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreCatButton);
