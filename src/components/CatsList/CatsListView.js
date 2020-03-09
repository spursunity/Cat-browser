import React from 'react';

import CatCard from '../CatCard/CatCardContainer';

import styles from '../styles/CatsList.module.css';


const CatsListView = ({ catsData }) => {
  return(
    <div className={ styles.catsList }>
      {catsData && catsData.map((cat) => {
        return (
          <CatCard
          key = { cat.id }
          catData = { cat }
          deletedCat = { cat.deleted } />
        );
      })}
    </div>
  );
}


export default CatsListView;