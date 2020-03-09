import React from 'react';

import styles from '../styles/CatPreview.module.css';
import { PHOTO } from '../../constants';


const CatPreviewView = ({ currentCatData }) => {
  return (
    <div className = { styles.previewDashboard }>
      <h2>Name: { currentCatData && currentCatData.name }</h2>
      <h2>Bio: { currentCatData && currentCatData.bio }</h2>
      <div className = { styles.photoContainer }>
          <img
          className = { styles.image }
          src = { currentCatData && currentCatData.image }
          alt = { PHOTO.CAT_ALT } />
      </div>
    </div>
  );
};


export default CatPreviewView;
