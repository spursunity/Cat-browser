import React from 'react';

import StoreCatButton from '../StoreCatButton/StoreCatButtonContainer';


const CatCardView = ({
  catCardClasses,
  catData,
  deleteDate,
  onCardClick,
}) => {
  return (
    <div
    className = { catCardClasses } >
      <StoreCatButton catData = { catData } />
      <div onClick = { onCardClick }>
        <h2>{ catData.name }</h2>
        <p>{ catData.shortInfo }</p>
        { deleteDate }
      </div>
    </div>
  );
}


export default CatCardView;
