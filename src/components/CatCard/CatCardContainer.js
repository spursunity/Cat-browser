import React from 'react';
import { connect } from 'react-redux';

import CatCardView from './CatCardView';

import styles from '../styles/CatCard.module.css';
import actions from '../../redux/actions';

const { addBio } = actions.catsActions;

/**
 * Component - Container
 * Cat card
 * Includes main info about the cat
 */
const CatCard = ({
  catData,
  deletedCat,
  currentCat,
  onAddBio,
}) => {
  function defineCatCardClasses() {
    let cardStateClass = styles.workingCard;

    if (deletedCat) {
      cardStateClass = styles.disabledCard;
    } else if (currentCat && currentCat.id === catData.id) {
      cardStateClass = styles.currentCard;
    }

    return `${styles.card} ${cardStateClass}`;
  };

  function onCardClick() {
    if (!deletedCat) {
      return onAddBio(catData);
    }
  };

  function getDeleteDate() {
    if (catData.deletedAt && deletedCat) {
      return (
        <>
          <strong>Deleted at:</strong>
          <p>{ catData.deletedAt }</p>
        </>
      );
    }
  };

  return (
    <CatCardView
    catCardClasses = { defineCatCardClasses() }
    catData = { catData }
    deleteDate = { getDeleteDate() }
    onCardClick = { onCardClick } />
  );
}


function mapStateToProps(state) {
  const { chosenCat } = state.catsReducer;

  return {
    currentCat: chosenCat,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onAddBio: (catData) => {
      dispatch(addBio(catData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatCard);
